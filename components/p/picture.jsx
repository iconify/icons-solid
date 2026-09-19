import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z-o8ie_sr.css';
import '../../css/s/s4avfybcx.css';
import '../../css/f/f1s_ru7cj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="z-o8ie_sr"/><path class="s4avfybcx"/><path class="f1s_ru7cj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:picture"} {...others} />);
}

export default Component;
