import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dw4qe0bkg.css';
import '../../css/n/nw-1wbc5o.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="dw4qe0bkg"/><path class="nw-1wbc5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:alarm-snooze"} {...others} />);
}

export default Component;
