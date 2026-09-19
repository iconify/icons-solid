import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq8vbjr1h.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="vq8vbjr1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pin-outline"} {...others} />);
}

export default Component;
