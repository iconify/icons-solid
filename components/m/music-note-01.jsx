import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/ut4jbwyoe.css';
import '../../css/n/nnc8tac4z.css';
import '../../css/o/ozw_qtvty.css';
import '../../css/q/qufgpumfi.css';
import '../../css/y/y_q6z8bof.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ut4jbwyoe"/><circle class="nnc8tac4z"/><circle class="ozw_qtvty"/><path class="qufgpumfi"/><path class="y_q6z8bof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:music-note-01"} {...others} />);
}

export default Component;
