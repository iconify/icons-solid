import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m1e7cqbol.css';
import '../../css/k/k4oox_b9w.css';
import '../../css/m/mu1z8mboi.css';
import '../../css/c/cujfar3uz.css';
import '../../css/m/mqzsc39nm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="m1e7cqbol"/><path class="k4oox_b9w wm-shine"/><path class="mu1z8mboi"/><path class="cujfar3uz"/><path class="mqzsc39nm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:user-circle"} {...others} />);
}

export default Component;
