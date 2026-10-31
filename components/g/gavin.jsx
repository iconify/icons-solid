import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uvk8mlb_x.css';
import '../../css/d/drg-9dbik.css';
import '../../css/e/e4y595zea.css';
import '../../css/h/h1ztcpblv.css';
import '../../css/s/shbynwbob.css';
import '../../css/z/zzxuksste.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="uvk8mlb_x"/><path class="drg-9dbik"/><path class="e4y595zea"/><path class="h1ztcpblv"/><path class="shbynwbob"/><path class="zzxuksste"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:gavin"} {...others} />);
}

export default Component;
