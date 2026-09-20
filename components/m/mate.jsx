import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcm4kccyx.css';
import '../../css/s/stlfwfbcz.css';
import '../../css/j/j3-9st8-f.css';
import '../../css/t/trifoi79u.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/x/x72vnxbzt.css';
import '../../css/u/uxsiryb4d.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qcm4kccyx"/><path class="stlfwfbcz"/><path class="j3-9st8-f"/><path class="trifoi79u"/><g class="jn8qy4bru"><path class="x72vnxbzt"/><path class="uxsiryb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:mate"} {...others} />);
}

export default Component;
