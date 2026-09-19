import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rm_q7b7hi.css';
import '../../css/y/ydu9-nbzw.css';
import '../../css/v/vm23ifb4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rm_q7b7hi"/><path class="ydu9-nbzw"/><path class="vm23ifb4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:truck-electric"} {...others} />);
}

export default Component;
