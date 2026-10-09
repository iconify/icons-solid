import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pycxazbfr.css';
import '../../css/y/ys4d30teh.css';
import '../../css/h/hc-kyoehs.css';
import '../../css/x/x88p2xa8i.css';
import '../../css/t/tkj5hkb6r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pycxazbfr"/><path class="ys4d30teh"/><path class="hc-kyoehs"/><path class="x88p2xa8i"/><path class="tkj5hkb6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-bar-stacked-20"} {...others} />);
}

export default Component;
