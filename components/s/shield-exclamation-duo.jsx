import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajsuvx4dq.css';
import '../../css/o/ok6uc_j_b.css';
import '../../css/i/iq5m3ebzf.css';
import '../../css/y/yp8brl62l.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ajsuvx4dq"/><path class="ok6uc_j_b"/><path class="iq5m3ebzf"/><path class="yp8brl62l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:shield-exclamation-duo"} {...others} />);
}

export default Component;
