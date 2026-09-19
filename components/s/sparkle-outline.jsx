import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6ad0f7ah.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="h6ad0f7ah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sparkle-outline"} {...others} />);
}

export default Component;
