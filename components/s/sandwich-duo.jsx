import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qrfxe7bdo.css';
import '../../css/h/h8wb40b9m.css';
import '../../css/x/xac-pkbvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qrfxe7bdo"/><path class="h8wb40b9m wm-a"/><path class="xac-pkbvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sandwich-duo"} {...others} />);
}

export default Component;
