import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ch5uyed_k.css';
import '../../css/f/f7aqdaclx.css';
import '../../css/q/qvngzn1zn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="ch5uyed_k"/><path class="f7aqdaclx"/><path class="qvngzn1zn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:video-camera"} {...others} />);
}

export default Component;
