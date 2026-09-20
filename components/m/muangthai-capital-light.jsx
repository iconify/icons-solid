import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smmum7bpy.css';
import '../../css/f/f5mommnqj.css';

const viewBox = {"width":1536,"height":1530};
const content = `<defs><clipPath id="SVG8XNTSbIi" clipPathUnits="userSpaceOnUse"><path class="smmum7bpy"/></clipPath></defs><g clip-path="url(#SVG8XNTSbIi)"><path class="f5mommnqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:muangthai-capital-light"} {...others} />);
}

export default Component;
