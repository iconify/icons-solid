import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tzt0_bt_l.css';
import '../../css/k/kls3_nbwn.css';
import '../../css/d/d-l22-bpi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="tzt0_bt_l"/><path class="kls3_nbwn"/><path class="d-l22-bpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:tent-banner"} {...others} />);
}

export default Component;
