import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/auzh0lpze.css';
import '../../css/t/t-vawzvbg.css';
import '../../css/u/uswr6mkhm.css';
import '../../css/x/xjfc-xbtr.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="auzh0lpze"/><path class="t-vawzvbg"/><path class="uswr6mkhm"/><path class="xjfc-xbtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:webcam-video-circle"} {...others} />);
}

export default Component;
