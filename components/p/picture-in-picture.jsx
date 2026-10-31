import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/ptm_ofbxw.css';
import '../../css/w/wx22cqc3m.css';
import '../../css/i/iu21s5bhi.css';
import '../../css/x/xgq890bjb.css';
import '../../css/e/euj49csjz.css';
import '../../css/o/o8tqambxi.css';
import '../../css/k/ke5xrib5h.css';
import '../../css/a/awf7-w39o.css';
import '../../css/v/v043yf2vo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ptm_ofbxw"/><path class="wx22cqc3m"/><path class="iu21s5bhi"/><path class="wm-shine xgq890bjb"/><path class="euj49csjz wm-k"/><path class="o8tqambxi wm-a"/><path class="ke5xrib5h"/><path class="awf7-w39o"/><path class="v043yf2vo wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:picture-in-picture"} {...others} />);
}

export default Component;
