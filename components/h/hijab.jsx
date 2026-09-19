import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uhfu0tbkz.css';
import '../../css/p/pp224x3ed.css';
import '../../css/q/qtzbrdlmb.css';
import '../../css/s/sj392dbgb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uhfu0tbkz"/><path class="pp224x3ed"/><path class="qtzbrdlmb"/><path class="sj392dbgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hijab"} {...others} />);
}

export default Component;
