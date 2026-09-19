import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fd_wzbjmu.css';
import '../../css/t/t8ec7tmhe.css';
import '../../css/g/gr6khdcvk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fd_wzbjmu"/><path class="t8ec7tmhe"/><path class="gr6khdcvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:transition-top"} {...others} />);
}

export default Component;
