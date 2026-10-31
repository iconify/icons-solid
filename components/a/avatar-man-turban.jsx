import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xmsibjbyf.css';
import '../../css/v/vp2dr96nv.css';
import '../../css/k/k0a4gsb1b.css';
import '../../css/j/jzitpu0-l.css';
import '../../css/s/s8z1hogeo.css';
import '../../css/d/dha3cs1-i.css';
import '../../css/b/bs1xk8baz.css';
import '../../css/k/k_wvr05bs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow xmsibjbyf"/><path class="vp2dr96nv"/><path class="k0a4gsb1b"/><path class="jzitpu0-l"/><path class="s8z1hogeo"/><path class="dha3cs1-i"/><path class="bs1xk8baz"/><path class="k_wvr05bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-man-turban"} {...others} />);
}

export default Component;
