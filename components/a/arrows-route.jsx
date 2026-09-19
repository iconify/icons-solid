import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wmg8avpvd.css';
import '../../css/h/he6ut4p2j.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="wmg8avpvd"/><path class="he6ut4p2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrows-route"} {...others} />);
}

export default Component;
