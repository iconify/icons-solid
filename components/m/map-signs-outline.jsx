import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vw2xqvbwg.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="vw2xqvbwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:map-signs-outline"} {...others} />);
}

export default Component;
