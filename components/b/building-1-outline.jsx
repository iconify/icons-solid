import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cy9spm2wh.css';
import '../../css/z/zb6w0600t.css';
import '../../css/h/hb2qjdq3x.css';
import '../../css/u/uy28-vb6a.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="cy9spm2wh"/><path clip-rule="evenodd" class="zb6w0600t"/><path class="hb2qjdq3x"/><path clip-rule="evenodd" class="uy28-vb6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:building-1-outline"} {...others} />);
}

export default Component;
