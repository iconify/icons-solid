import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkvmf2k6h.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="jkvmf2k6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cogwheel-outline"} {...others} />);
}

export default Component;
