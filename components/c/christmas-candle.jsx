import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ifmp5hbxk.css';
import '../../css/h/h8yx_sbog.css';
import '../../css/e/ej919obgh.css';
import '../../css/x/x3rwmxqix.css';
import '../../css/t/t25jr-b2d.css';
import '../../css/f/fcgyms-iv.css';
import '../../css/c/c0j8tugqh.css';
import '../../css/x/xrydgzb1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ifmp5hbxk wm-shadow"/><path class="h8yx_sbog"/><path class="ej919obgh"/><path class="x3rwmxqix"/><path class="t25jr-b2d"/><path class="fcgyms-iv wm-s"/><path class="c0j8tugqh wm-s"/><path class="xrydgzb1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:christmas-candle"} {...others} />);
}

export default Component;
