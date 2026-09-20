import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ji63zhrdl.css';
import '../../css/c/cs7zjhbrw.css';
import '../../css/j/jomwdcxqo.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/o_d7gwb7s.css';
import '../../css/s/s51fiv1hv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ji63zhrdl"/><path class="cs7zjhbrw"/><path class="jomwdcxqo"/><g class="jn8qy4bru"><path class="o_d7gwb7s"/><path class="s51fiv1hv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:computer-mouse"} {...others} />);
}

export default Component;
