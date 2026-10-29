import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n6e9vybhg.css';
import '../../css/l/ltn3h1bpl.css';
import '../../css/u/ulwbvki_f.css';
import '../../css/y/ypgbrz-om.css';
import '../../css/z/ztoi_7bzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="n6e9vybhg wm-deco"/><path class="ltn3h1bpl wm-deco"/><path class="ulwbvki_f wm-k"/><path class="wm-a ypgbrz-om"/><path class="wm-k ztoi_7bzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-left-right-blueprint"} {...others} />);
}

export default Component;
