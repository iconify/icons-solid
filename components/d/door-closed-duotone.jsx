import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n0b33wbja.css';
import '../../css/q/qi57hyiwy.css';
import '../../css/x/x33sl95gk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n0b33wbja"/><path class="qi57hyiwy"/><path class="x33sl95gk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:door-closed-duotone"} {...others} />);
}

export default Component;
