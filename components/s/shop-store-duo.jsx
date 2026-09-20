import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qb297np8a.css';
import '../../css/r/r7y14-b4s.css';
import '../../css/b/bbm5dbc7e.css';
import '../../css/u/ug5p91bmh.css';
import '../../css/l/li9km_bff.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="qb297np8a"><path clip-rule="evenodd" class="r7y14-b4s"/><path class="bbm5dbc7e"/><path class="ug5p91bmh"/><path class="li9km_bff"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:shop-store-duo"} {...others} />);
}

export default Component;
