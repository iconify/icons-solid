import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lp6pul37p.css';
import '../../css/t/thqvtmn1f.css';
import '../../css/m/m160m0_et.css';
import '../../css/q/qed7qfbof.css';
import '../../css/a/aik51_ogm.css';
import '../../css/w/wln4ec7cu.css';
import '../../css/h/h5-ybjiiz.css';
import '../../css/m/mbty9jbcw.css';
import '../../css/x/x85kurc4y.css';
import '../../css/e/esxminbue.css';
import '../../css/k/k63wodutv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lp6pul37p wm-shadow"/><path class="thqvtmn1f wm-k"/><path class="m160m0_et wm-k"/><path class="qed7qfbof wm-k"/><path class="aik51_ogm wm-k"/><path class="wln4ec7cu wm-k"/><path class="h5-ybjiiz wm-shine"/><path class="mbty9jbcw wm-k"/><path class="wm-k x85kurc4y"/><path class="esxminbue wm-k"/><path class="k63wodutv wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:lucky-coin"} {...others} />);
}

export default Component;
