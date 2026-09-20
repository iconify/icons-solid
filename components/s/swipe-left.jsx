import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k16gslnbh.css';
import '../../css/t/t9k02ccqj.css';
import '../../css/z/z-ds9n2dv.css';
import '../../css/k/kl7ukhbxv.css';
import '../../css/j/j0zw4ybfu.css';
import '../../css/w/wo730-dxl.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="k16gslnbh"/><path class="t9k02ccqj"/><g class="z-ds9n2dv"><path class="kl7ukhbxv"/><path class="j0zw4ybfu"/><path class="wo730-dxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:swipe-left"} {...others} />);
}

export default Component;
