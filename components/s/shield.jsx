import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m3c2kv-_z.css';
import '../../css/k/ks4-49wik.css';
import '../../css/t/tjiohdtgt.css';
import '../../css/x/xkvu3i4cm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m3c2kv-_z"/><path class="ks4-49wik"/><path clip-rule="evenodd" class="tjiohdtgt"/><path class="xkvu3i4cm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:shield"} {...others} />);
}

export default Component;
