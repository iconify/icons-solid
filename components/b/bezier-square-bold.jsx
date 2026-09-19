import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nxqdjxbxw.css';
import '../../css/w/w6ffmbb_t.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="nxqdjxbxw"/><path class="w6ffmbb_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bezier-square-bold"} {...others} />);
}

export default Component;
