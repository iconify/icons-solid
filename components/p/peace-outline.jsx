import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd_xlpb0y.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="fd_xlpb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:peace-outline"} {...others} />);
}

export default Component;
