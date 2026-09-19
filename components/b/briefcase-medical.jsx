import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u2dwg3gay.css';
import '../../css/p/pvjp7gbus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u2dwg3gay"/><path class="pvjp7gbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:briefcase-medical"} {...others} />);
}

export default Component;
