import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dur61vhbw.css';
import '../../css/j/j3uzzx8qh.css';
import '../../css/e/e8s28i-4d.css';
import '../../css/f/fj5coubit.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="dur61vhbw"/><path class="j3uzzx8qh"/><path clip-rule="evenodd" class="e8s28i-4d"/><rect class="fj5coubit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:object-group-bold"} {...others} />);
}

export default Component;
