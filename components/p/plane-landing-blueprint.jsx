import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/us9cs6bil.css';
import '../../css/w/w0e70wbbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="us9cs6bil wm-k"/><path class="w0e70wbbt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:plane-landing-blueprint"} {...others} />);
}

export default Component;
