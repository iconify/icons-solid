import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fs8yz5fab.css';
import '../../css/j/j3onqyb5u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="fs8yz5fab"/><path clip-rule="evenodd" class="j3onqyb5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tags-bold"} {...others} />);
}

export default Component;
