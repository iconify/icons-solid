import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uluj0_ceb.css';
import '../../css/r/r447x5bkm.css';
import '../../css/h/htmq9rb4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="uluj0_ceb"/><path class="r447x5bkm"/><path class="htmq9rb4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cpu-setting-filled"} {...others} />);
}

export default Component;
