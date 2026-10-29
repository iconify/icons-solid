import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/o3c0473sv.css';
import '../../css/x/xuuhzvbpt.css';
import '../../css/t/t0383xejc.css';
import '../../css/b/bx0wdaclv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="o3c0473sv wm-deco"/><path class="wm-deco xuuhzvbpt"/><path class="t0383xejc wm-k"/><path class="bx0wdaclv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:skip-back-blueprint"} {...others} />);
}

export default Component;
