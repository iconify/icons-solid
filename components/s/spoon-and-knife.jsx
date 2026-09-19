import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zeg97qb-j.css';
import '../../css/x/x_inhdctp.css';
import '../../css/h/hv9uwxbqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zeg97qb-j"/><path class="x_inhdctp"/><path class="hv9uwxbqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:spoon-and-knife"} {...others} />);
}

export default Component;
