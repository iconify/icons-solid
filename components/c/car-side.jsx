import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6ihv4k4v.css';
import '../../css/g/gqi_w2iyl.css';
import '../../css/j/jz3df6bjk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b6ihv4k4v"/><path clip-rule="evenodd" class="gqi_w2iyl"/><path class="jz3df6bjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:car-side"} {...others} />);
}

export default Component;
