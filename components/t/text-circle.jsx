import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fa2ubcbix.css';
import '../../css/d/dawcsab1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fa2ubcbix"/><path class="dawcsab1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:text-circle"} {...others} />);
}

export default Component;
