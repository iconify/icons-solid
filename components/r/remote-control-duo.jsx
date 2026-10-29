import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v4bsxzb7r.css';
import '../../css/h/h2u2p5b7j.css';
import '../../css/f/fjk_47b8s.css';
import '../../css/z/zq1i1eb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="v4bsxzb7r"/><path class="h2u2p5b7j wm-s"/><path class="fjk_47b8s"/><path class="wm-a zq1i1eb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:remote-control-duo"} {...others} />);
}

export default Component;
