import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3exvvawo.css';
import '../../css/i/ivjvz2eii.css';
import '../../css/p/pkgjvccjw.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/l0bn-3b4l.css';
import '../../css/u/uto0n9pso.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGka9CIbLw" class="k3exvvawo"/></defs><mask id="SVGKIv1JDvK" width="12" height="20" x="6" y="2" maskUnits="userSpaceOnUse" class="ivjvz2eii"><path class="pkgjvccjw"/><use href="#SVGka9CIbLw"/></mask><g class="h01tyzbfu"><use href="#SVGka9CIbLw" mask="url(#SVGKIv1JDvK)" class="l0bn-3b4l"/><path class="uto0n9pso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:mobile-light"} {...others} />);
}

export default Component;
