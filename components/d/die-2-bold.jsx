import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1gdnmbvh.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="x1gdnmbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:die-2-bold"} {...others} />);
}

export default Component;
