import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/o/ok8lecbuh.css';
import '../../css/q/qr9mr-bvp.css';
import '../../css/g/gu1ynac7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yw4fz_b6b"/><path class="ok8lecbuh wm-a"/><path class="qr9mr-bvp"/><path class="gu1ynac7g wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:football"} {...others} />);
}

export default Component;
