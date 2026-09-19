import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k091tb0hb.css';
import '../../css/q/qkp19wbeb.css';
import '../../css/b/b-f3-gzch.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><rect class="k091tb0hb"/><path class="qkp19wbeb"/><rect class="b-f3-gzch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:mobile-tablet"} {...others} />);
}

export default Component;
