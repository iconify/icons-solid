import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ippgambnh.css';
import '../../css/w/wpeb5qn-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ippgambnh"/><path class="wpeb5qn-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:neural-network"} {...others} />);
}

export default Component;
