import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/id3l-eb5x.css';
import '../../css/r/rb1hythup.css';
import '../../css/s/sumqrmj4j.css';
import '../../css/b/bsj_9-otn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="id3l-eb5x"/><path class="rb1hythup wm-a"/><path class="sumqrmj4j wm-k"/><path class="bsj_9-otn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hard-drive-sketch"} {...others} />);
}

export default Component;
