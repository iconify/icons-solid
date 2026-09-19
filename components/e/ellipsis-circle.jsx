import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xonqv8bhq.css';
import '../../css/e/exvi9zkwm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="h01tyzbfu"><path class="xonqv8bhq"/><path class="exvi9zkwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ellipsis-circle"} {...others} />);
}

export default Component;
