import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kowlw5zhx.css';
import '../../css/q/qn0v38bkw.css';
import '../../css/d/depnz-brc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="kowlw5zhx"/><path clip-rule="evenodd" class="qn0v38bkw"/><path class="depnz-brc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-genie"} {...others} />);
}

export default Component;
