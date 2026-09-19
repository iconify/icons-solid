import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/j/jye2-i80a.css';
import '../../css/k/kp9b5cb7o.css';
import '../../css/r/rd_p_sicu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="s9cl3zbei"><rect class="jye2-i80a"/><path class="kp9b5cb7o"/><path class="rd_p_sicu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:note-pad"} {...others} />);
}

export default Component;
