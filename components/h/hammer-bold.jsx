import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iad3jz0vo.css';
import '../../css/q/qubhqfq4s.css';
import '../../css/a/alepcebtt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="iad3jz0vo"/><path clip-rule="evenodd" class="qubhqfq4s"/><path class="alepcebtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hammer-bold"} {...others} />);
}

export default Component;
