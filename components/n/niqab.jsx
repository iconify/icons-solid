import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/ta6zu2fhi.css';
import '../../css/s/sj392dbgb.css';
import '../../css/w/wlt8dprqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ta6zu2fhi"/><path class="sj392dbgb"/><path class="wlt8dprqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:niqab"} {...others} />);
}

export default Component;
