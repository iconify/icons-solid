import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t2w0vbc1f.css';
import '../../css/v/v9qwxk7pw.css';
import '../../css/v/vx3y4mp6c.css';
import '../../css/p/py-u8epwi.css';
import '../../css/j/j7m6u-b-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="t2w0vbc1f"/><path class="v9qwxk7pw wm-k"/><path class="vx3y4mp6c wm-k"/><path class="py-u8epwi wm-a"/><path class="j7m6u-b-q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-left-close-sketch"} {...others} />);
}

export default Component;
