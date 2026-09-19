import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/owncrzbvw.css';
import '../../css/v/vbn_0g4sz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="owncrzbvw"/><path class="vbn_0g4sz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:automotive-battery-01"} {...others} />);
}

export default Component;
