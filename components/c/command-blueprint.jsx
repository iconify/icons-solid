import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/odedu7bbc.css';
import '../../css/b/bxjv56brc.css';
import '../../css/t/t83hz6hkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="odedu7bbc wm-deco"/><path class="bxjv56brc wm-deco"/><path class="t83hz6hkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:command-blueprint"} {...others} />);
}

export default Component;
