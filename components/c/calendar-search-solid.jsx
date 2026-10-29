import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/w69n2x5jx.css';
import '../../css/i/i378c-rig.css';
import '../../css/k/k8okabcwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="w69n2x5jx"/><path class="i378c-rig wm-a"/><path class="k8okabcwj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calendar-search-solid"} {...others} />);
}

export default Component;
