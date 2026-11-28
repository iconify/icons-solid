import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwdajubci.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d_plodt-s.css';
import '../../css/o/oi3kjkbsp.css';
import '../../css/f/ffxep2b5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iwdajubci secondary"/><g class="dt0cm9dhy primary"><path class="d_plodt-s"/><path class="oi3kjkbsp"/><path class="ffxep2b5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ai-search-duo"} {...others} />);
}

export default Component;
