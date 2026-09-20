import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smmum7bpy.css';
import '../../css/p/p68xdn8du.css';

const viewBox = {"width":1536,"height":1530};
const content = `<defs><clipPath id="SVG8XNTSbIi" clipPathUnits="userSpaceOnUse"><path class="smmum7bpy"/></clipPath></defs><g clip-path="url(#SVG8XNTSbIi)"><path class="p68xdn8du"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:muangthai-capital-dark"} {...others} />);
}

export default Component;
