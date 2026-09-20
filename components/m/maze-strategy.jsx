import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mve0jibyn.css';
import '../../css/d/dly0bybrd.css';
import '../../css/x/xjjvqp5zj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mve0jibyn"/><path class="dly0bybrd"/><path class="xjjvqp5zj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:maze-strategy"} {...others} />);
}

export default Component;
