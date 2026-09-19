import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbk05b36b.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/s/szds-jbsj.css';
import '../../css/b/bf5zruazm.css';
import '../../css/s/s6w3i8sdl.css';
import '../../css/f/f3_-twbek.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGSJkC5dXi"><path class="nbk05b36b"/></clipPath></defs><g clip-path="url(#SVGSJkC5dXi)" transform="scale(.9375)" class="nv9qcacyl"><path class="szds-jbsj"/><path class="bf5zruazm"/><path class="s6w3i8sdl"/><path class="f3_-twbek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:sb-4x3"} {...others} />);
}

export default Component;
