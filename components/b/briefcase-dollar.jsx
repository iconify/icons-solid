import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s79qgjdvm.css';
import '../../css/p/p49qakbea.css';
import '../../css/l/lifkejbvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="s79qgjdvm"/><path class="p49qakbea"/><path class="lifkejbvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:briefcase-dollar"} {...others} />);
}

export default Component;
