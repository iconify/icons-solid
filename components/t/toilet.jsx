import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b-o6d68av.css';
import '../../css/e/efs6vvi9l.css';
import '../../css/p/p1q65gj8e.css';
import '../../css/s/sj84w633l.css';
import '../../css/t/tcq00dbec.css';
import '../../css/d/dxerausdx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="b-o6d68av wm-shadow"/><path class="efs6vvi9l"/><path class="p1q65gj8e"/><path class="sj84w633l"/><path class="tcq00dbec"/><path class="dxerausdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:toilet"} {...others} />);
}

export default Component;
