import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hc654n61t.css';
import '../../css/g/g0l4wt5qi.css';
import '../../css/t/txtwnjbdf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="hc654n61t"/><path clip-rule="evenodd" class="g0l4wt5qi"/><path class="txtwnjbdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:laptop-cog-bold"} {...others} />);
}

export default Component;
