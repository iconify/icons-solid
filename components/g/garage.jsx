import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dissgdc8k.css';
import '../../css/l/l2mdcy6pi.css';
import '../../css/y/yi1ay4bjk.css';
import '../../css/o/o6fimhbzm.css';
import '../../css/a/ad9j6bb8a.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dissgdc8k"/><path class="l2mdcy6pi"/><path class="yi1ay4bjk"/><path class="o6fimhbzm"/><path class="ad9j6bb8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:garage"} {...others} />);
}

export default Component;
