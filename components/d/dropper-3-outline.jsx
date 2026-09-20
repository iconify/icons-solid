import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q8-azqsqv.css';
import '../../css/r/rjf10t-9f.css';
import '../../css/z/zy8fcvbqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q8-azqsqv"/><path class="rjf10t-9f"/><path clip-rule="evenodd" class="zy8fcvbqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dropper-3-outline"} {...others} />);
}

export default Component;
