import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f83i5e07h.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="f83i5e07h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:spade-duo"} {...others} />);
}

export default Component;
