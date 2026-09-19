import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpyqggb7n.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="rpyqggb7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:music-outline"} {...others} />);
}

export default Component;
