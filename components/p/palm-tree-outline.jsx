import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5eihabei.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="c5eihabei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:palm-tree-outline"} {...others} />);
}

export default Component;
