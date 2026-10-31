import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/q1-1azoge.css';
import '../../css/s/sgqni1jqa.css';
import '../../css/g/gc3eoc82d.css';
import '../../css/q/q7k6l9qzv.css';
import '../../css/j/juv56-7pd.css';
import '../../css/g/gjx6pxb2o.css';
import '../../css/t/tq5er0uwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="q1-1azoge"/><path class="sgqni1jqa"/><path class="gc3eoc82d wm-shine"/><path class="q7k6l9qzv wm-k"/><path class="juv56-7pd"/><path class="gjx6pxb2o"/><path class="tq5er0uwg wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:hexagon"} {...others} />);
}

export default Component;
