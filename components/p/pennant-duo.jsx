import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iiwb_quuo.css';
import '../../css/k/kk7_s9bwh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="iiwb_quuo"/><path class="kk7_s9bwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pennant-duo"} {...others} />);
}

export default Component;
