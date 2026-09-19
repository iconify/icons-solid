import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8ovkkbdl.css';
import '../../css/i/i9fk3vbkl.css';
import '../../css/n/ndirhzcpc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="y8ovkkbdl"/><path class="i9fk3vbkl"/><path class="ndirhzcpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:snow-duo"} {...others} />);
}

export default Component;
