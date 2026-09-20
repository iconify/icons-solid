import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuf42lb8e.css';
import '../../css/g/ga1vxbbjl.css';
import '../../css/b/bisv3bcpq.css';
import '../../css/w/wme3t2wxl.css';
import '../../css/d/do38__yss.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g class="kuf42lb8e"><path class="ga1vxbbjl"/><path fill="url(#SVGyjXsLaIr)" transform="translate(-1528)" class="bisv3bcpq"/><defs><radialGradient id="SVGyjXsLaIr" cx="0" cy="0" r="1" gradientTransform="translate(2271.03 -89.26)scale(1038.26)" gradientUnits="userSpaceOnUse"><stop offset="0" class="wme3t2wxl"/><stop offset="1" class="do38__yss"/></radialGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:affinity-designer"} {...others} />);
}

export default Component;
