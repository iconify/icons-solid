import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jut4up8jl.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="jut4up8jl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sparkle-bold"} {...others} />);
}

export default Component;
