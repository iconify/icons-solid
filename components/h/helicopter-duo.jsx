import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_d063p8k.css';
import '../../css/n/nm8on7bej.css';
import '../../css/l/lxxaunp0b.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="a_d063p8k"/><path class="nm8on7bej"/><path class="lxxaunp0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:helicopter-duo"} {...others} />);
}

export default Component;
