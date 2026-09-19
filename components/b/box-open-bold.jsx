import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ute87qmnh.css';
import '../../css/f/frswp0b7h.css';
import '../../css/f/f5f8fudfg.css';
import '../../css/b/b2mock0sg.css';
import '../../css/b/bwkigdc-a.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ute87qmnh"/><path class="frswp0b7h"/><path clip-rule="evenodd" class="f5f8fudfg"/><path class="b2mock0sg"/><path clip-rule="evenodd" class="bwkigdc-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-open-bold"} {...others} />);
}

export default Component;
