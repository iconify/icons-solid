import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r_p6g6b5e.css';
import '../../css/i/i7-8_6n_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="r_p6g6b5e wm-k"/><path class="i7-8_6n_p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-monster-fluffy-gloss"} {...others} />);
}

export default Component;
