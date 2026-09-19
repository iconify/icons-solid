import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ff_0uo-vb.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="ff_0uo-vb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hand-horns-outline"} {...others} />);
}

export default Component;
