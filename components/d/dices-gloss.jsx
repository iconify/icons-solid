import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pbkcg9bjr.css';
import '../../css/r/r6o4-eb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="pbkcg9bjr wm-k"/><path class="r6o4-eb3b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dices-gloss"} {...others} />);
}

export default Component;
