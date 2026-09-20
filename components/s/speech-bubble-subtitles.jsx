import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cjtj21b7t.css';
import '../../css/z/zunpkrbju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cjtj21b7t"/><path clip-rule="evenodd" class="zunpkrbju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:speech-bubble-subtitles"} {...others} />);
}

export default Component;
