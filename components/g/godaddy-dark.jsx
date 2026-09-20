import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dr7fluyjp.css';
import '../../css/k/k295tibms.css';

const viewBox = {"width":166,"height":34};
const content = `<path class="dr7fluyjp prefix__path-mobile"/><path class="k295tibms prefix__path-desktop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:godaddy-dark"} {...others} />);
}

export default Component;
