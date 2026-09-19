import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/idjlyibdv.css';
import '../../css/l/lqs9vvb0u.css';
import '../../css/q/q_6picbex.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="idjlyibdv"/><path class="lqs9vvb0u"/><path class="q_6picbex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:email-down"} {...others} />);
}

export default Component;
