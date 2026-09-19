import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/so7vdsbso.css';
import '../../css/w/wlj2oyb9h.css';
import '../../css/v/vgvp0ybrt.css';
import '../../css/n/n6glqenev.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="so7vdsbso"/><path class="wlj2oyb9h"/><path class="vgvp0ybrt"/><path class="n6glqenev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:detaspace"} {...others} />);
}

export default Component;
