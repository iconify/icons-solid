import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kw_s9xb-r.css';

const viewBox = {"width":897,"height":1024};
const content = `<path class="kw_s9xb-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:volumedown"} {...others} />);
}

export default Component;
