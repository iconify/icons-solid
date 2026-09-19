import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/deia9eb9b.css';
import '../../css/p/p4hny8b2l.css';
import '../../css/b/bup-tl2ej.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="deia9eb9b"/><path class="p4hny8b2l"/><path class="bup-tl2ej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:rain-duo"} {...others} />);
}

export default Component;
