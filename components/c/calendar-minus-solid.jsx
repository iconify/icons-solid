import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zuyg1yrkn.css';
import '../../css/i/i378c-rig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="zuyg1yrkn"/><path class="i378c-rig wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calendar-minus-solid"} {...others} />);
}

export default Component;
