import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z-3-7paba.css';
import '../../css/y/y3wbdac5q.css';
import '../../css/q/qvdfr62dc.css';
import '../../css/u/ucrhd8zio.css';
import '../../css/e/eo-5txb8c.css';
import '../../css/e/e4tk24c_z.css';
import '../../css/f/f-x4b7csg.css';
import '../../css/y/ytclnmd3h.css';
import '../../css/d/dtwfw0bax.css';
import '../../css/t/trutp-bil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z-3-7paba"/><path class="y3wbdac5q"/><path class="qvdfr62dc"/><path class="ucrhd8zio"/><path class="eo-5txb8c"/><path class="e4tk24c_z"/><path class="f-x4b7csg"/><path class="ytclnmd3h"/><path class="dtwfw0bax"/><path class="trutp-bil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bacteria-linear"} {...others} />);
}

export default Component;
