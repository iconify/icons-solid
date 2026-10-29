import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z4jtr5b1e.css';
import '../../css/a/al8--bbwn.css';
import '../../css/f/fdhlmacdj.css';
import '../../css/v/vfghup6ai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="z4jtr5b1e"/><path class="al8--bbwn wm-k"/><path class="fdhlmacdj wm-k"/><path class="vfghup6ai wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tree-pine-sketch"} {...others} />);
}

export default Component;
