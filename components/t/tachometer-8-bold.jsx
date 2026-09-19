import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/obwky_97w.css';
import '../../css/j/ju6owbb8t.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="obwky_97w"/><path clip-rule="evenodd" class="ju6owbb8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tachometer-8-bold"} {...others} />);
}

export default Component;
