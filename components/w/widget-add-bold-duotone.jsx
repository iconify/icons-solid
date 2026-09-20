import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yruzez1gq.css';
import '../../css/e/eog0g2beg.css';
import '../../css/c/cvjox4b6h.css';
import '../../css/t/t-byfzbic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yruzez1gq"/><path class="eog0g2beg"/><path class="cvjox4b6h"/><path class="t-byfzbic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-add-bold-duotone"} {...others} />);
}

export default Component;
