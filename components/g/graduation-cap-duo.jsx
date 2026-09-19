import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4y92abcd.css';
import '../../css/z/zusr_mb9w.css';
import '../../css/t/tf5ukcbuf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="p4y92abcd"/><path class="zusr_mb9w"/><path class="tf5ukcbuf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:graduation-cap-duo"} {...others} />);
}

export default Component;
