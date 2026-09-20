import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bf_f8h_jo.css';
import '../../css/h/hxed0ghvg.css';
import '../../css/l/lah__lb3m.css';
import '../../css/m/m917afb6j.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="bf_f8h_jo"/><g clip-path="url(#SVGsyD8NePA)"><path class="hxed0ghvg"/><path class="lah__lb3m"/></g><defs><clipPath id="SVGsyD8NePA"><path class="m917afb6j"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:svelte"} {...others} />);
}

export default Component;
