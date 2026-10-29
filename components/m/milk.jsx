import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yik19q6gx.css';
import '../../css/m/mimnazbtn.css';
import '../../css/y/yzcu05xgy.css';
import '../../css/n/nh6axkbqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="yik19q6gx"/><path class="mimnazbtn"/><path class="yzcu05xgy"/><path class="nh6axkbqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:milk"} {...others} />);
}

export default Component;
