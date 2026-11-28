import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rtn7-ybgt.css';
import '../../css/p/pj-qf1wwq.css';
import '../../css/q/q4xbdsb-s.css';
import '../../css/o/ol-ou4b0g.css';
import '../../css/l/lya4hzioz.css';
import '../../css/p/pp6wmbbok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="rtn7-ybgt"/><path class="pj-qf1wwq"/><path class="q4xbdsb-s"/><path class="ol-ou4b0g"/><path class="lya4hzioz"/><path class="pp6wmbbok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:hot-air-balloon"} {...others} />);
}

export default Component;
