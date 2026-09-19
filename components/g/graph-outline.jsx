import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zec3nwpcl.css';
import '../../css/q/qwpceeq4m.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/atjk8mbde.css';
import '../../css/j/j-npdpb0r.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVG2sHfXSKM" class="zec3nwpcl"/><path id="SVGeBGscdQQ" class="qwpceeq4m"/></defs><g class="h01tyzbfu"><use href="#SVG2sHfXSKM" class="atjk8mbde"/><use href="#SVGeBGscdQQ" class="j-npdpb0r"/><use href="#SVG2sHfXSKM" class="atjk8mbde"/><use href="#SVGeBGscdQQ" class="j-npdpb0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:graph-outline"} {...others} />);
}

export default Component;
