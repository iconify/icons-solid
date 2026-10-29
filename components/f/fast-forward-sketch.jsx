import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nr6fqccxw.css';
import '../../css/z/zyqc9rfhb.css';
import '../../css/d/dzs1i5bjm.css';
import '../../css/l/lrmoo_osq.css';
import '../../css/t/tbtn-lyjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nr6fqccxw"/><path class="wm-k zyqc9rfhb"/><path class="dzs1i5bjm wm-a"/><path class="lrmoo_osq wm-k"/><path class="tbtn-lyjz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fast-forward-sketch"} {...others} />);
}

export default Component;
