import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7vnnsbng.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="q7vnnsbng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:comment-3-outline"} {...others} />);
}

export default Component;
