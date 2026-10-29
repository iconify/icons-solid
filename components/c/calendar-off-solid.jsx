import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bs2wtjq3d.css';
import '../../css/x/xlkibacah.css';
import '../../css/a/aalr8-b6s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="bs2wtjq3d"/><path class="wm-a xlkibacah"/><path class="aalr8-b6s wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calendar-off-solid"} {...others} />);
}

export default Component;
