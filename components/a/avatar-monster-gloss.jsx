import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r46bthbup.css';
import '../../css/g/gj4hr_bua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="r46bthbup wm-k"/><path class="gj4hr_bua wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-monster-gloss"} {...others} />);
}

export default Component;
