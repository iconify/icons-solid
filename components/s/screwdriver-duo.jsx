import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8az6pp1j.css';
import '../../css/c/cj0hxubnx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="e8az6pp1j"/><path class="cj0hxubnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:screwdriver-duo"} {...others} />);
}

export default Component;
