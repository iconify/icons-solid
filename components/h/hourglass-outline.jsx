import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cap4h-y1r.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="cap4h-y1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hourglass-outline"} {...others} />);
}

export default Component;
