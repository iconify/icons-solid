import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ovyaxmvoi.css';
import '../../css/m/mx4s6h18d.css';
import '../../css/g/gg-skbcsx.css';
import '../../css/e/e6_dtejzc.css';
import '../../css/o/ot8l69t7e.css';
import '../../css/x/xg24lhblw.css';
import '../../css/u/u28i6dbsj.css';
import '../../css/o/ocjf6e9dx.css';
import '../../css/t/tyoiz-ovw.css';
import '../../css/f/f4dqej25k.css';
import '../../css/y/y7051fbdz.css';
import '../../css/c/cxcvf1bvf.css';
import '../../css/f/fafocmsmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ovyaxmvoi wm-shadow"/><path class="mx4s6h18d wm-a"/><path class="gg-skbcsx wm-a"/><path class="e6_dtejzc wm-a"/><path class="ot8l69t7e wm-shine"/><path class="wm-k xg24lhblw"/><path class="u28i6dbsj wm-k"/><path class="ocjf6e9dx wm-k"/><path class="tyoiz-ovw wm-shine"/><path class="f4dqej25k wm-k"/><path class="wm-k y7051fbdz"/><path class="cxcvf1bvf wm-k"/><path class="fafocmsmc wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:wind"} {...others} />);
}

export default Component;
