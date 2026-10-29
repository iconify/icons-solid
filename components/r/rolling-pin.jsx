import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/utqn6ebsa.css';
import '../../css/r/rv5nrp1vr.css';
import '../../css/r/r51b-qsja.css';
import '../../css/n/nwli07b7q.css';
import '../../css/w/w49jpeg7r.css';
import '../../css/o/o96_yotwq.css';
import '../../css/g/gd-y51bnb.css';
import '../../css/i/i-1y5kn5e.css';
import '../../css/b/byvz2m-9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="utqn6ebsa wm-shadow"/><path class="rv5nrp1vr wm-shadow"/><path class="r51b-qsja"/><path class="nwli07b7q"/><path class="w49jpeg7r"/><path class="o96_yotwq"/><path class="gd-y51bnb"/><path class="i-1y5kn5e"/><path class="byvz2m-9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:rolling-pin"} {...others} />);
}

export default Component;
