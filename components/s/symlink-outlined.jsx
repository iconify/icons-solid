import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uk4jgzb_e.css';
import '../../css/h/hdloyab2s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uk4jgzb_e"/><path class="hdloyab2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:symlink-outlined"} {...others} />);
}

export default Component;
