import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lwkt2g_ty.css';
import '../../css/r/rc4-7gb_q.css';
import '../../css/f/fcuf7fb5f.css';
import '../../css/a/afaviu-7d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="lwkt2g_ty wm-deco"/><path class="rc4-7gb_q wm-deco"/><path class="fcuf7fb5f wm-k"/><path class="afaviu-7d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:crosshair-blueprint"} {...others} />);
}

export default Component;
