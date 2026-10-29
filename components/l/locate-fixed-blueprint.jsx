import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lwkt2g_ty.css';
import '../../css/m/miijncbwe.css';
import '../../css/x/x6ru6ciza.css';
import '../../css/w/wh0zujbon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="lwkt2g_ty wm-deco"/><path class="miijncbwe wm-deco"/><path class="wm-k x6ru6ciza"/><path class="wh0zujbon wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:locate-fixed-blueprint"} {...others} />);
}

export default Component;
