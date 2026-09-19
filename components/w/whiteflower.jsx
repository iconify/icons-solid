import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1oj3o3gm.css';
import '../../css/h/hy2vl0dwm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n1oj3o3gm"/><path class="hy2vl0dwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:whiteflower"} {...others} />);
}

export default Component;
