import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbrrvbcjm.css';
import '../../css/g/gydrqwbzq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="tbrrvbcjm"/><path class="gydrqwbzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:quote-duo"} {...others} />);
}

export default Component;
