import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p013inydy.css';
import '../../css/r/r1hf7ra_v.css';
import '../../css/w/w2ebhfe2p.css';
import '../../css/l/l00qf0e4o.css';
import '../../css/d/dtzfsfbqx.css';

const viewBox = {"width":80,"height":80};
const content = `<defs><clipPath id="SVG20UuIe1E"><path class="p013inydy"/></clipPath></defs><g clip-path="url(#SVG20UuIe1E)" transform="matrix(1.1304 0 0 -1.1304 5.714 82.137)"><g class="r1hf7ra_v"><path class="w2ebhfe2p"/><path class="l00qf0e4o"/><path class="dtzfsfbqx"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:protractor"} {...others} />);
}

export default Component;
