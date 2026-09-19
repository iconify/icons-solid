import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/r/rv3khnsij.css';
import '../../css/g/g7241j9by.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="rv3khnsij"/><path class="g7241j9by"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:sort-1"} {...others} />);
}

export default Component;
