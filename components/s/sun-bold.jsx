import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oz57-db5e.css';
import '../../css/y/y1mg03o2a.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="oz57-db5e"/><path clip-rule="evenodd" class="y1mg03o2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sun-bold"} {...others} />);
}

export default Component;
