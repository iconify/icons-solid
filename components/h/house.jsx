import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2m90iw3t.css';
import '../../css/m/mh62rsbhy.css';
import '../../css/m/mbatq-3nh.css';
import '../../css/a/a5yg05b5s.css';
import '../../css/q/q0zx-nbkv.css';
import '../../css/w/w_cl1dv_p.css';
import '../../css/h/h06fmhbql.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b2m90iw3t"/><path class="mh62rsbhy"/><path class="mbatq-3nh"/><path class="a5yg05b5s"/><path class="q0zx-nbkv"/><path class="w_cl1dv_p"/><path class="h06fmhbql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:house"} {...others} />);
}

export default Component;
