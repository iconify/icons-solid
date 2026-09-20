import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g70aadr1q.css';
import '../../css/s/souzsmq4g.css';
import '../../css/a/aaccdmm6g.css';
import '../../css/i/i9_1y7cht.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="g70aadr1q"/><path class="souzsmq4g"/><path class="aaccdmm6g"/><path class="i9_1y7cht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:desktop-chat"} {...others} />);
}

export default Component;
