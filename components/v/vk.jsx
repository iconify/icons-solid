import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/paoz3oiaw.css';
import '../../css/u/ujzlw64ng.css';
import '../../css/i/ig49w4b5i.css';

const viewBox = {"width":256,"height":256};
const content = `<g clip-path="url(#SVGtj1Wf5yD)" class="ft5dv1b6b"><mask id="SVGtj1Wf5yD" width="256" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="paoz3oiaw"/></mask><g mask="url(#SVGtj1Wf5yD)"><path class="ujzlw64ng"/><path class="ig49w4b5i"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:vk"} {...others} />);
}

export default Component;
