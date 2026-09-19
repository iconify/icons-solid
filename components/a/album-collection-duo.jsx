import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ys2bl8o3o.css';
import '../../css/c/cig_ecncd.css';
import '../../css/g/g48s35bpt.css';
import '../../css/f/frywu39dk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ys2bl8o3o"/><path class="cig_ecncd"/><path class="g48s35bpt"/><path class="frywu39dk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:album-collection-duo"} {...others} />);
}

export default Component;
