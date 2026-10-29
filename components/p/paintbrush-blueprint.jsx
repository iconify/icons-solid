import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z6m9-r_nv.css';
import '../../css/i/i0r75dn8b.css';
import '../../css/v/v9vh-fd4s.css';
import '../../css/w/w5jtgj_4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco z6m9-r_nv"/><path class="i0r75dn8b wm-k"/><path class="v9vh-fd4s wm-a"/><path class="w5jtgj_4y wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paintbrush-blueprint"} {...others} />);
}

export default Component;
