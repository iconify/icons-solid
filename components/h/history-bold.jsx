import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zr39jv2gn.css';
import '../../css/f/f5bdngp0q.css';
import '../../css/o/odj6qrbln.css';

const viewBox = {"width":81,"height":80};
const content = `<g class="cuyn6tgcc"><path class="zr39jv2gn"/><path class="f5bdngp0q"/><path class="odj6qrbln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:history-bold"} {...others} />);
}

export default Component;
