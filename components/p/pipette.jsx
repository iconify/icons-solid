import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xula1wtqd.css';
import '../../css/f/f7s8op3su.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xula1wtqd"/><path class="f7s8op3su"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pipette"} {...others} />);
}

export default Component;
