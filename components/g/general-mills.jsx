import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6l3pi92g.css';
import '../../css/b/bgq_-plcs.css';
import '../../css/l/l0h_ebbcb.css';
import '../../css/i/inu0b8b_d.css';

const viewBox = {"width":65.358,"height":38.174};
const content = `<defs><clipPath id="SVGsVWw0r5W"><path class="y6l3pi92g"/></clipPath></defs><g clip-path="url(#SVGsVWw0r5W)" transform="translate(-8.24 -28.214)scale(.13774)"><path class="bgq_-plcs"/></g><path class="l0h_ebbcb"/><path class="inu0b8b_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:general-mills"} {...others} />);
}

export default Component;
