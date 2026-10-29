import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b_d68_bhp.css';
import '../../css/a/ar0r6f66r.css';
import '../../css/b/bos0j4biy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="b_d68_bhp"/><path class="ar0r6f66r wm-a"/><path class="bos0j4biy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:landmark"} {...others} />);
}

export default Component;
