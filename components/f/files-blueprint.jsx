import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lcz-43aeg.css';
import '../../css/t/t218te2ox.css';
import '../../css/y/yui4pigey.css';
import '../../css/x/x4fik1bvl.css';
import '../../css/z/zkk_e-e3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="lcz-43aeg wm-deco"/><path class="t218te2ox wm-deco"/><path class="wm-k yui4pigey"/><path class="wm-a x4fik1bvl"/><path class="wm-a zkk_e-e3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:files-blueprint"} {...others} />);
}

export default Component;
