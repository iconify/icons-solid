import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/p/phbwvobjr.css';
import '../../css/f/fnpl309tr.css';
import '../../css/j/jcvlxyb4x.css';
import '../../css/c/ce1wgkbld.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="pr52f_b5y"><rect class="phbwvobjr"/><rect class="fnpl309tr"/><rect class="jcvlxyb4x"/><path class="ce1wgkbld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grid-add-bold"} {...others} />);
}

export default Component;
