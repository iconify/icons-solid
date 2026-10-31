import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m51zj83kr.css';
import '../../css/a/at-kqgdlc.css';
import '../../css/w/wnveq1bjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="m51zj83kr wm-k"/><path class="at-kqgdlc wm-a"/><path class="wm-deco wnveq1bjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:strikethrough"} {...others} />);
}

export default Component;
