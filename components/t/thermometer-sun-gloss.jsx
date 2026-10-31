import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m38bw1tog.css';
import '../../css/q/qtb6v8bcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="m38bw1tog wm-k"/><path class="qtb6v8bcu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thermometer-sun-gloss"} {...others} />);
}

export default Component;
