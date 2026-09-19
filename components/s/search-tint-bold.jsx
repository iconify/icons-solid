import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fz8ezkb8f.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="fz8ezkb8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:search-tint-bold"} {...others} />);
}

export default Component;
