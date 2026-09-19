import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q92zkvbnj.css';
import '../../css/n/nj7hs3bjf.css';
import '../../css/s/s1dd07bvp.css';
import '../../css/j/jhhz4obvr.css';
import '../../css/e/e88f6e3wz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="q92zkvbnj"/><path class="nj7hs3bjf"/><path class="s1dd07bvp"/><path class="jhhz4obvr"/><path class="e88f6e3wz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:bottle-with-popping-cork"} {...others} />);
}

export default Component;
