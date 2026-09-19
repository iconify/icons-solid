import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c_1j7e3uw.css';
import '../../css/s/se-o2bbid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="c_1j7e3uw"/><path class="se-o2bbid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workout-kicking"} {...others} />);
}

export default Component;
