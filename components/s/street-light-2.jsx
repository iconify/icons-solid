import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w7o65pytz.css';
import '../../css/j/jr0fgob5d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="w7o65pytz"/><path class="jr0fgob5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:street-light-2"} {...others} />);
}

export default Component;
