import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wxihkebcp.css';
import '../../css/e/esgjdlmqa.css';
import '../../css/i/imn_1acgr.css';
import '../../css/n/n8_-hmbhy.css';
import '../../css/h/hs-paebjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wxihkebcp"/><path class="esgjdlmqa"/><path class="imn_1acgr"/><path class="n8_-hmbhy"/><path class="hs-paebjo wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:git-branch-plus"} {...others} />);
}

export default Component;
