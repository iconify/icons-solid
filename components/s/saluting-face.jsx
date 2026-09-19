import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1h5npbai.css';
import '../../css/x/xjuy25b1n.css';
import '../../css/u/usf18bcfz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="f1h5npbai"/><path class="xjuy25b1n"/><path class="usf18bcfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:saluting-face"} {...others} />);
}

export default Component;
