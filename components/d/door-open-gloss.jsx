import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qbglx958f.css';
import '../../css/m/mqu_ic34j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="qbglx958f wm-k"/><path class="mqu_ic34j wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:door-open-gloss"} {...others} />);
}

export default Component;
