import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/p/pja3-dbvx.css';
import '../../css/x/xkjm40j0v.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="pja3-dbvx"/><path class="xkjm40j0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:code-1"} {...others} />);
}

export default Component;
