import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ik8cggbda.css';
import '../../css/w/websu8mzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ik8cggbda"/><path class="websu8mzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:new-twitter-ellipse"} {...others} />);
}

export default Component;
