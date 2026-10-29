import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e58d9kzle.css';
import '../../css/n/nqwgjqbun.css';
import '../../css/e/e_tnpdb-a.css';
import '../../css/e/evamyomtm.css';
import '../../css/w/wya5wcext.css';
import '../../css/q/q7owavo8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="e58d9kzle wm-deco"/><path class="nqwgjqbun wm-deco"/><path class="e_tnpdb-a wm-deco"/><path class="evamyomtm wm-k"/><path class="wm-a wya5wcext"/><path class="q7owavo8u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-column-stacked-blueprint"} {...others} />);
}

export default Component;
