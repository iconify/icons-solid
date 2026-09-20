import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lrjpzmb_e.css';
import '../../css/a/a2ub-8b6f.css';
import '../../css/u/u00_wm4uj.css';
import '../../css/n/ns4qm-gyf.css';
import '../../css/w/wx-10b1lq.css';
import '../../css/y/yq5s9pdqc.css';
import '../../css/b/bmi233uiy.css';
import '../../css/d/dx7ysgw9x.css';
import '../../css/z/zu_1babqi.css';
import '../../css/x/xpajc4ibs.css';
import '../../css/n/nupngzi7k.css';
import '../../css/k/kj_qijbgj.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="lrjpzmb_e"/><path class="a2ub-8b6f"/><path class="u00_wm4uj"/><path class="ns4qm-gyf"/><path class="wx-10b1lq"/><path class="yq5s9pdqc"/><path class="bmi233uiy"/><path class="dx7ysgw9x"/><path class="zu_1babqi"/><path class="xpajc4ibs"/><path class="nupngzi7k"/><path class="kj_qijbgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:winter-day-activities"} {...others} />);
}

export default Component;
