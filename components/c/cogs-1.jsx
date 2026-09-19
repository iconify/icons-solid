import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rl15_ykyd.css';
import '../../css/g/g1gkzeb7t.css';
import '../../css/b/bndlp9bpz.css';

const viewBox = {"width":90,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rl15_ykyd"/><path class="g1gkzeb7t"/><path class="bndlp9bpz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:cogs-1"} {...others} />);
}

export default Component;
