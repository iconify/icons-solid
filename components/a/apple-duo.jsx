import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xba_y6h8b.css';
import '../../css/n/nvvjxctmi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xba_y6h8b"/><path class="nvvjxctmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:apple-duo"} {...others} />);
}

export default Component;
