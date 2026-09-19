import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/ohe7qpbin.css';
import '../../css/q/qgr3itvuc.css';
import '../../css/j/jse-wgbqj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><circle class="ohe7qpbin"/><circle class="qgr3itvuc"/><path class="jse-wgbqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:user-group-stroke-16"} {...others} />);
}

export default Component;
