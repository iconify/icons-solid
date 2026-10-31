import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnyax3bwc.css';
import '../../css/z/zfjgl05hi.css';
import '../../css/d/di9898b_k.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGZ7flxbIK"><path class="xnyax3bwc"/></clipPath><symbol id="SVGwwWtkdrD" viewBox="0 0 279 279"><path class="zfjgl05hi"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 135 135; 9 135 135; -15 135 135"/></path></symbol></defs><path class="di9898b_k"/><g clip-path="url(#SVGZ7flxbIK)"><use width="279" height="279" href="#SVGwwWtkdrD" transform="translate(116.5 116.5)"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:moonrise"} {...others} />);
}

export default Component;
