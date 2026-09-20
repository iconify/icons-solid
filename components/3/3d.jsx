import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x1-a0bb_d.css';
import '../../css/e/e01c0p65q.css';
import '../../css/q/q_w47dsaz.css';
import '../../css/o/o1y64ct1r.css';
import '../../css/a/a-fhp7c6g.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="x1-a0bb_d"/><path class="e01c0p65q"/><path class="q_w47dsaz"/><path class="o1y64ct1r"/><path class="a-fhp7c6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:3d"} {...others} />);
}

export default Component;
