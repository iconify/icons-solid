import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pdoe7fa1e.css';
import '../../css/h/h7a9wibzd.css';
import '../../css/c/cu7wb8t0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="pdoe7fa1e wm-a"/><path class="h7a9wibzd"/><path class="cu7wb8t0f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:love-lock"} {...others} />);
}

export default Component;
