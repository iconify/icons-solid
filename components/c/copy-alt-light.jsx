import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qlrm6yb-l.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/y_ij1k3xr.css';
import '../../css/l/l0bn-3b4l.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGKJaeveDz" class="qlrm6yb-l"/></defs><mask id="SVGYA3t2btq" class="n1mjunbsu"><use href="#SVGKJaeveDz"/></mask><g class="h01tyzbfu"><path class="y_ij1k3xr"/><use href="#SVGKJaeveDz" mask="url(#SVGYA3t2btq)" class="l0bn-3b4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:copy-alt-light"} {...others} />);
}

export default Component;
