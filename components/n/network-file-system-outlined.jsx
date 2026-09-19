import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftyrjsbkc.css';
import '../../css/r/rjqqyp-nz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ftyrjsbkc"/><path class="rjqqyp-nz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:network-file-system-outlined"} {...others} />);
}

export default Component;
