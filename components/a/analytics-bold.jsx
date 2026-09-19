import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fyuh6wb8z.css';
import '../../css/s/s9w9-4b0f.css';
import '../../css/z/zn0vk4bkg.css';
import '../../css/z/zepf_92zz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fyuh6wb8z"/><path class="s9w9-4b0f"/><path clip-rule="evenodd" class="zn0vk4bkg"/><path class="zepf_92zz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:analytics-bold"} {...others} />);
}

export default Component;
