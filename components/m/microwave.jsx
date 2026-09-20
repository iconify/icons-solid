import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/a/akwqd_9mm.css';
import '../../css/z/zxfa5tb_i.css';
import '../../css/o/osohg4ctr.css';
import '../../css/p/pnhckcbce.css';
import '../../css/r/rup910bbi.css';
import '../../css/x/x6yaytbcl.css';
import '../../css/u/ucwtknblw.css';
import '../../css/t/t9_40bc9w.css';
import '../../css/k/km5gpyx_a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="akwqd_9mm"/><path class="zxfa5tb_i"/><path class="osohg4ctr"/><path class="pnhckcbce"/><path class="rup910bbi"/><path class="x6yaytbcl"/><path class="ucwtknblw"/><path class="t9_40bc9w"/><path class="km5gpyx_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:microwave"} {...others} />);
}

export default Component;
