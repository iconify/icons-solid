import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mhok5-d7y.css';
import '../../css/x/x4vzpib2m.css';
import '../../css/b/bb9hymbdr.css';
import '../../css/g/gdl4st_bw.css';
import '../../css/w/w9ex1pb6f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="mhok5-d7y"/><rect transform="rotate(-30 4.241 15.778)" class="x4vzpib2m"/><path class="bb9hymbdr"/><rect transform="rotate(-30 26.401 34.16)" class="gdl4st_bw"/><path class="w9ex1pb6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:selfie"} {...others} />);
}

export default Component;
