import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/ftv5at4kc.css';
import '../../css/g/gfnus2l-k.css';
import '../../css/x/xk3bi4f7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ftv5at4kc wm-deco"/><path class="gfnus2l-k wm-k"/><path class="wm-a xk3bi4f7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:holly-blueprint"} {...others} />);
}

export default Component;
