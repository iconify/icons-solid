import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l2ou10csi.css';
import '../../css/f/f7ty-7bko.css';
import '../../css/g/gsfl8rd0i.css';
import '../../css/c/ct8yzwbnu.css';
import '../../css/n/n6z8fvbqf.css';
import '../../css/z/zxefmh5ps.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="l2ou10csi wm-shadow"/><path class="f7ty-7bko"/><path class="gsfl8rd0i"/><path class="ct8yzwbnu"/><path class="n6z8fvbqf"/><path class="zxefmh5ps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:mushroom"} {...others} />);
}

export default Component;
