import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2ux_fb-o.css';
import '../../css/y/y766n9b5x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s2ux_fb-o"/><path class="y766n9b5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:short-text"} {...others} />);
}

export default Component;
