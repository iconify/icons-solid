import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2hxwibdd.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="p2hxwibdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:mouse-pointer-outline"} {...others} />);
}

export default Component;
