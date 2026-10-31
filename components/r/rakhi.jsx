import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t3lvcmxtq.css';
import '../../css/k/kraidjvrx.css';
import '../../css/d/de8wv2j4l.css';
import '../../css/u/uz4ph3b3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="t3lvcmxtq"/><path class="kraidjvrx wm-k"/><path class="de8wv2j4l wm-a"/><path class="uz4ph3b3b wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:rakhi"} {...others} />);
}

export default Component;
