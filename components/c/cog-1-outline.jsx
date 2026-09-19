import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ruzvt778r.css';
import '../../css/z/zobunf4_t.css';
import '../../css/k/kd29-79yc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ruzvt778r"/><path clip-rule="evenodd" class="zobunf4_t"/><path class="kd29-79yc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cog-1-outline"} {...others} />);
}

export default Component;
