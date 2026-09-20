import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/r/rdenubbrx.css';
import '../../css/b/bom312b6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="rdenubbrx"/><path class="bom312b6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-layout"} {...others} />);
}

export default Component;
