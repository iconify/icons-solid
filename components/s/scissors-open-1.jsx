import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/j/j65b3x7pl.css';
import '../../css/q/quiye1bnu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="j65b3x7pl"/><path class="quiye1bnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:scissors-open-1"} {...others} />);
}

export default Component;
