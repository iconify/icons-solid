import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgmbfvb2i.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="fgmbfvb2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:caret-outline"} {...others} />);
}

export default Component;
