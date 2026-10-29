import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/drgourb2x.css';
import '../../css/e/ee72xe_hx.css';
import '../../css/b/bt4eanb_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="drgourb2x"/><path class="ee72xe_hx wm-a"/><path class="bt4eanb_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:building-2-duo"} {...others} />);
}

export default Component;
