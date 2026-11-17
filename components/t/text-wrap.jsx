import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/v3hxlaczu.css';
import '../../css/q/q8y0v010y.css';
import '../../css/z/z5_fucb0k.css';
import '../../css/j/j4awd2b8b.css';
import '../../css/l/l_-8w97zi.css';
import '../../css/h/hgh8eo58i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="v3hxlaczu"/><path class="q8y0v010y"/><path class="z5_fucb0k"/><path class="j4awd2b8b"/><path class="l_-8w97zi"/><path class="hgh8eo58i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:text-wrap"} {...others} />);
}

export default Component;
