import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fb7tovbew.css';
import '../../css/s/so9dkwzpu.css';
import '../../css/k/kcb0a1efc.css';
import '../../css/z/z-nlv55ib.css';
import '../../css/s/sk5qde4qx.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><symbol id="SVGziFiOclR"><path class="fb7tovbew"/></symbol></defs><path class="so9dkwzpu"/><path class="kcb0a1efc"/><path class="z-nlv55ib"/><use width="100%" height="100%" x="124.496" y="15.002" href="#SVGziFiOclR" transform="matrix(1.01151 0 0 1 -.743 47.138)" class="sk5qde4qx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:blender-wordmark"} {...others} />);
}

export default Component;
