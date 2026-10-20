import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_7zzabkc.css';
import '../../css/q/qpqddt4wu.css';
import '../../css/h/h_y8mrbnu.css';
import '../../css/g/ge04wn6ul.css';
import '../../css/h/hnf__1q8p.css';
import '../../css/r/re7ob6hrf.css';

const viewBox = {"width":404.5,"height":45};
const content = `<path class="r_7zzabkc"/><defs><filter id="SVG7l5lVrYg" width="120.8" height="18.8" x="98.1" y="24.8" filterUnits="userSpaceOnUse"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter><path id="SVGrKwEubVH" class="qpqddt4wu"/></defs><mask id="SVG4MomkeeN" width="120.8" height="18.8" x="98.1" y="24.8" maskUnits="userSpaceOnUse"><use href="#SVGrKwEubVH" filter="url(#SVG7l5lVrYg)"/></mask><path mask="url(#SVG4MomkeeN)" class="h_y8mrbnu"/><path class="ge04wn6ul"/><defs><filter id="SVGy1UandPY" width="92.2" height="18.2" x="98.1" y="1.4" filterUnits="userSpaceOnUse"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/></filter></defs><mask id="SVGw8IJzbEy" width="92.2" height="18.2" x="98.1" y="1.4" maskUnits="userSpaceOnUse"><use href="#SVGrKwEubVH" filter="url(#SVGy1UandPY)"/></mask><path mask="url(#SVGw8IJzbEy)" class="hnf__1q8p"/><path class="re7ob6hrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:native-instruments-light"} {...others} />);
}

export default Component;
