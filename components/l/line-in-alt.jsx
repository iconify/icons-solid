import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/t/te85glbsz.css';
import '../../css/e/emnsetb8o.css';
import '../../css/t/ts76sqbbo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect transform="rotate(-90 15 9)" class="te85glbsz"/><path class="emnsetb8o"/><path class="ts76sqbbo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:line-in-alt"} {...others} />);
}

export default Component;
