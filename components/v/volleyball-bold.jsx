import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wxgz8m3uf.css';
import '../../css/h/hz12p2b1h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="wxgz8m3uf"/><path class="hz12p2b1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:volleyball-bold"} {...others} />);
}

export default Component;
