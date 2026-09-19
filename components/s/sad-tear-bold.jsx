import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/naq74d2mj.css';
import '../../css/h/hckszgbzg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="naq74d2mj"/><path clip-rule="evenodd" class="hckszgbzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sad-tear-bold"} {...others} />);
}

export default Component;
