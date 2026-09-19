import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/i/ipf2vu9op.css';
import '../../css/f/fzm2rccme.css';
import '../../css/p/p_61p5bej.css';
import '../../css/b/btj-cobvn.css';
import '../../css/t/t6-8_dbpu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ipf2vu9op"/><path class="fzm2rccme"/><path class="p_61p5bej"/><path class="btj-cobvn"/><path class="t6-8_dbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:medicine-bottle"} {...others} />);
}

export default Component;
