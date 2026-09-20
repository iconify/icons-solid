import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvkns1d3z.css';
import '../../css/t/trfgb8b8n.css';
import '../../css/v/vldf6k28c.css';
import '../../css/u/u7-dcztie.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGBZAZxbZv" x1="201.484" x2="1225.532" y1="177.516" y2="-846.532" gradientTransform="matrix(.4 0 0 -.4 -29.4 122.2)" gradientUnits="userSpaceOnUse"><stop offset="0" class="kvkns1d3z"/><stop offset=".999" class="trfgb8b8n"/></linearGradient><path fill="url(#SVGBZAZxbZv)" class="vldf6k28c"/><path class="u7-dcztie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:planning-center-services"} {...others} />);
}

export default Component;
