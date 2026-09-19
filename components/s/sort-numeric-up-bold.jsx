import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gns6qx_4s.css';
import '../../css/u/uv-8ifblj.css';
import '../../css/m/mvu50ub7r.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="gns6qx_4s"/><path class="uv-8ifblj"/><path class="mvu50ub7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sort-numeric-up-bold"} {...others} />);
}

export default Component;
