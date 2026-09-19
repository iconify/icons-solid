import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dgv3dpb-u.css';
import '../../css/o/o6l7tkb7s.css';
import '../../css/u/um8386b8f.css';
import '../../css/l/lv8_-5sui.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dgv3dpb-u"/><path class="o6l7tkb7s"/><path class="um8386b8f"/><path class="lv8_-5sui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:canoe-1"} {...others} />);
}

export default Component;
