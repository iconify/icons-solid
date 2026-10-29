import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w8rvwhbnt.css';
import '../../css/h/hl1kwacuc.css';
import '../../css/h/h7a9wibzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="w8rvwhbnt"/><path class="hl1kwacuc wm-a"/><path class="h7a9wibzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:love-lock-duo"} {...others} />);
}

export default Component;
