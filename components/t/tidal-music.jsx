import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvu4qjbqh.css';
import '../../css/y/yc28y4z9n.css';
import '../../css/q/qz78st19n.css';
import '../../css/d/dm71_ndhl.css';
import '../../css/h/ho8p___gd.css';

const viewBox = {"width":50.952,"height":7.203};
const content = `<defs><clipPath id="SVGX6WhXdNZ" clipPathUnits="userSpaceOnUse"><path class="lvu4qjbqh"/></clipPath></defs><path class="yc28y4z9n"/><g clip-path="url(#SVGX6WhXdNZ)" transform="matrix(.35278 0 0 -.35278 -35.676 179.855)"><path class="qz78st19n"/></g><path class="dm71_ndhl"/><path class="ho8p___gd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tidal-music"} {...others} />);
}

export default Component;
