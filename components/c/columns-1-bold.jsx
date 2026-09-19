import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/d/d7ze-3byf.css';
import '../../css/v/v8921wpmq.css';
import '../../css/a/auk98ibeb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="pr52f_b5y"><path class="d7ze-3byf"/><rect class="v8921wpmq"/><path class="auk98ibeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:columns-1-bold"} {...others} />);
}

export default Component;
