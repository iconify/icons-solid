import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gw9b4gbyk.css';
import '../../css/b/bevchjwhi.css';
import '../../css/y/yhq7zacej.css';
import '../../css/z/zto_8pw8i.css';
import '../../css/k/kp7n6bbnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gw9b4gbyk wm-shadow"/><path class="bevchjwhi"/><path class="yhq7zacej"/><path class="zto_8pw8i"/><path class="kp7n6bbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:firecracker"} {...others} />);
}

export default Component;
