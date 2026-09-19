import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q4rvvnbeo.css';
import '../../css/t/t3c84fb9j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="q4rvvnbeo"/><path clip-rule="evenodd" class="t3c84fb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:briefcase-bold"} {...others} />);
}

export default Component;
