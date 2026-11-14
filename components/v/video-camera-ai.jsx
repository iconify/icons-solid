import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/udf7oioqp.css';
import '../../css/w/wovsjwbgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="udf7oioqp"/><path class="wovsjwbgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:video-camera-ai"} {...others} />);
}

export default Component;
