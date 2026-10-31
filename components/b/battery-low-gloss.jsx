import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bvc2-kbwf.css';
import '../../css/q/q3ll-1b4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="bvc2-kbwf wm-k"/><path class="q3ll-1b4x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:battery-low-gloss"} {...others} />);
}

export default Component;
