import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j9mdqgbbk.css';
import '../../css/x/xqv5q937w.css';
import '../../css/q/q1m8f__ky.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j9mdqgbbk"/><path class="xqv5q937w"/><path class="q1m8f__ky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:flame-kindling"} {...others} />);
}

export default Component;
