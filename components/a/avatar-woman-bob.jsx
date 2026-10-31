import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gd_20l3xx.css';
import '../../css/q/q-9cmhbwm.css';
import '../../css/f/fy7e9-7_d.css';
import '../../css/x/xnuo6raly.css';
import '../../css/g/g5dgrab9a.css';
import '../../css/e/e66zw6b2u.css';
import '../../css/b/bs1xk8baz.css';
import '../../css/k/k_wvr05bs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gd_20l3xx wm-shadow"/><path class="q-9cmhbwm"/><path class="fy7e9-7_d"/><path class="xnuo6raly"/><path class="g5dgrab9a"/><path class="e66zw6b2u"/><path class="bs1xk8baz"/><path class="k_wvr05bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-woman-bob"} {...others} />);
}

export default Component;
