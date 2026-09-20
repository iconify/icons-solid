import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6154jvgb.css';
import '../../css/h/hb9fpsbpg.css';

const viewBox = {"width":74,"height":74};
const content = `<g class="ft5dv1b6b"><path class="s6154jvgb"/><path class="hb9fpsbpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:heroui-dark"} {...others} />);
}

export default Component;
