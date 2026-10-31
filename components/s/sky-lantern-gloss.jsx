import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bttq49ywc.css';
import '../../css/q/qc_3683um.css';
import '../../css/j/jkreibv-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="bttq49ywc wm-k"/><path class="qc_3683um wm-a"/><path class="jkreibv-q wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sky-lantern-gloss"} {...others} />);
}

export default Component;
