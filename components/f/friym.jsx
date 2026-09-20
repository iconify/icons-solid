import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxwquuvnh.css';
import '../../css/f/feg6l4hlv.css';
import '../../css/b/b8n84vbbt.css';
import '../../css/e/ed4ma6xcl.css';
import '../../css/t/tjjn32bcl.css';

const viewBox = {"width":285.21,"height":283.07};
const content = `<path class="uxwquuvnh"/><circle class="feg6l4hlv"/><path class="b8n84vbbt"/><circle class="ed4ma6xcl"/><path class="tjjn32bcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:friym"} {...others} />);
}

export default Component;
