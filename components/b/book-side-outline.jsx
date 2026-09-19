import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgpptxj6o.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="cgpptxj6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:book-side-outline"} {...others} />);
}

export default Component;
