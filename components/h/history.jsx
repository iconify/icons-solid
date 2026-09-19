import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwjz0gboq.css';
import '../../css/u/u9k9s16xc.css';
import '../../css/o/oky-cpd6t.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xwjz0gboq"/><path class="u9k9s16xc"/><path class="oky-cpd6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:history"} {...others} />);
}

export default Component;
