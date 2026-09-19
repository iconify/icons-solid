import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vh_t7actz.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="vh_t7actz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:book-spine-outline"} {...others} />);
}

export default Component;
