import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py7ktqbvf.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j-y9rjbjr.css';
import '../../css/p/pd35oyb3g.css';
import '../../css/e/ele2febsg.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGNj8XZdDN" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path class="py7ktqbvf"/></mask><g mask="url(#SVGNj8XZdDN)" class="ft5dv1b6b"><path class="j-y9rjbjr"/><path class="pd35oyb3g"/><path class="ele2febsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cannabis-leaf"} {...others} />);
}

export default Component;
