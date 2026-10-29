import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nv9fz2cti.css';
import '../../css/w/w9-re23ay.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/p/pg9_vdbco.css';
import '../../css/m/me05m18qz.css';
import '../../css/u/u9ezh4g5z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="nv9fz2cti wm-deco"/><path class="w9-re23ay wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="pg9_vdbco wm-k"/><path class="me05m18qz wm-a"/><path class="u9ezh4g5z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:share-2-blueprint"} {...others} />);
}

export default Component;
