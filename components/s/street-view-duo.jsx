import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rc_3vsnmc.css';
import '../../css/m/mspgd1bzj.css';
import '../../css/n/n72omlbua.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="rc_3vsnmc"/><path class="mspgd1bzj"/><path class="n72omlbua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:street-view-duo"} {...others} />);
}

export default Component;
