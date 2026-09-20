import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6sw39bxv.css';
import '../../css/j/ju90a2y7d.css';
import '../../css/r/rcqilhbca.css';
import '../../css/y/yh5aj875b.css';
import '../../css/q/q1z8jsbmt.css';
import '../../css/h/h8-jxlbqf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="i6sw39bxv"/><path class="ju90a2y7d"/><path class="rcqilhbca"/><path class="yh5aj875b"/><path class="q1z8jsbmt"/><path class="h8-jxlbqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:discount-percent-coupon"} {...others} />);
}

export default Component;
