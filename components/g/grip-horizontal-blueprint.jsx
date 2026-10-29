import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nrlirxy2k.css';
import '../../css/d/dnduw-b0j.css';
import '../../css/w/wiw6j-bgs.css';
import '../../css/g/g351f3ful.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="nrlirxy2k wm-deco"/><path class="dnduw-b0j wm-deco"/><path class="wiw6j-bgs wm-deco"/><path class="g351f3ful"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:grip-horizontal-blueprint"} {...others} />);
}

export default Component;
