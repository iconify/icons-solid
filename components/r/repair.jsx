import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/x3gf7-bft.css';
import '../../css/t/tg1iw57om.css';
import '../../css/z/zfuc2hcbm.css';
import '../../css/t/tr_v09_tm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="x3gf7-bft"/><path class="tg1iw57om"/><path class="zfuc2hcbm"/><path class="tr_v09_tm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:repair"} {...others} />);
}

export default Component;
