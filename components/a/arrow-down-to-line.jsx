import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sa0bz32lw.css';
import '../../css/x/xslfg2evh.css';
import '../../css/g/g5srfcchm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sa0bz32lw"/><path class="xslfg2evh"/><path class="g5srfcchm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-down-to-line"} {...others} />);
}

export default Component;
