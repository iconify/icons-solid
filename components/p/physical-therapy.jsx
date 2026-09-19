import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc9wrxdmw.css';
import '../../css/d/dz7d0mbwh.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGtdziAeMj" class="bc9wrxdmw"/><path id="SVGZ6VuEeVE" class="dz7d0mbwh"/></defs><g class="cuyn6tgcc"><use href="#SVGtdziAeMj"/><use href="#SVGZ6VuEeVE" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGtdziAeMj"/><use href="#SVGZ6VuEeVE" clip-rule="evenodd" class="d2kvgvbvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:physical-therapy"} {...others} />);
}

export default Component;
