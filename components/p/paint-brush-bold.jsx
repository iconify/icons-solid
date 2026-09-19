import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgx6o05ak.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="zgx6o05ak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:paint-brush-bold"} {...others} />);
}

export default Component;
