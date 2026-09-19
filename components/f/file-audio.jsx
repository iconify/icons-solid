import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/h/hygm70ygz.css';
import '../../css/j/jxl7ousbe.css';
import '../../css/g/gb1t6vkyv.css';
import '../../css/e/e3k02oyaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="hygm70ygz"/><path class="jxl7ousbe"/><circle class="gb1t6vkyv"/><path class="e3k02oyaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-audio"} {...others} />);
}

export default Component;
