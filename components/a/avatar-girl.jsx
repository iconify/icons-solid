import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qqqxs9bqx.css';
import '../../css/f/fy8ast4du.css';
import '../../css/t/tl2ohacuc.css';
import '../../css/f/f7dlddrer.css';
import '../../css/o/om5f3sbzg.css';
import '../../css/r/r6c9ymbdk.css';
import '../../css/e/e4rmgebho.css';
import '../../css/y/y1lx_wbil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qqqxs9bqx wm-shadow"/><path class="fy8ast4du"/><path class="tl2ohacuc"/><path class="f7dlddrer"/><path class="om5f3sbzg"/><path class="r6c9ymbdk"/><path class="e4rmgebho"/><path class="y1lx_wbil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-girl"} {...others} />);
}

export default Component;
