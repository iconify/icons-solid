import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ab31-9b-a.css';
import '../../css/q/q95ykzb0k.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="ab31-9b-a"/><rect class="q95ykzb0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:briefcase-1-bold"} {...others} />);
}

export default Component;
