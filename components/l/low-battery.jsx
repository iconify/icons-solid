import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c87o6pbte.css';
import '../../css/m/mfap_hbod.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/c/cuy0u_kfh.css';
import '../../css/g/gxk1hu3mk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c87o6pbte"/><path class="mfap_hbod"/><g class="jn8qy4bru"><path class="cuy0u_kfh"/><path class="gxk1hu3mk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:low-battery"} {...others} />);
}

export default Component;
