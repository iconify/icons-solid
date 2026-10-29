import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/azgjlne8a.css';
import '../../css/r/ruwbbnbtn.css';
import '../../css/u/ukjvipc-p.css';
import '../../css/o/o9u4dqbcn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="azgjlne8a wm-deco"/><path class="ruwbbnbtn wm-deco"/><path class="ukjvipc-p wm-deco"/><path class="o9u4dqbcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:globe-lock-blueprint"} {...others} />);
}

export default Component;
