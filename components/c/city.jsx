import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/twzr5ub1p.css';
import '../../css/w/wmfpilbnv.css';
import '../../css/x/xpes6m53l.css';
import '../../css/l/legydmb6h.css';
import '../../css/b/bp_m5mb_i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="twzr5ub1p"/><rect class="wmfpilbnv"/><path class="xpes6m53l"/><rect class="legydmb6h"/><path class="bp_m5mb_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:city"} {...others} />);
}

export default Component;
