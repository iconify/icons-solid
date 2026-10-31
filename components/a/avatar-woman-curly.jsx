import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m4ca8dbnd.css';
import '../../css/u/u53y5cfvm.css';
import '../../css/h/hwotaab1o.css';
import '../../css/f/fxuhdpbpe.css';
import '../../css/i/ig9iopb3f.css';
import '../../css/f/f38oc6biv.css';
import '../../css/b/bs1xk8baz.css';
import '../../css/k/k_wvr05bs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="m4ca8dbnd wm-shadow"/><path class="u53y5cfvm"/><path class="hwotaab1o"/><path class="fxuhdpbpe"/><path class="ig9iopb3f"/><path class="f38oc6biv"/><path class="bs1xk8baz"/><path class="k_wvr05bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-woman-curly"} {...others} />);
}

export default Component;
