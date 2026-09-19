import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e54-4tkbo.css';
import '../../css/v/vdbd48c3o.css';
import '../../css/p/pyhw2vz5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e54-4tkbo"/><path class="vdbd48c3o"/><path class="pyhw2vz5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:radius"} {...others} />);
}

export default Component;
