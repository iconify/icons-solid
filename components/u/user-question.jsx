import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zbuvtybbw.css';
import '../../css/u/ugs4mpvqv.css';
import '../../css/r/rlnny_b_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zbuvtybbw"/><path class="ugs4mpvqv"/><path class="rlnny_b_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:user-question"} {...others} />);
}

export default Component;
