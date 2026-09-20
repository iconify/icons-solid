import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g0ygl7brh.css';
import '../../css/h/h_luhebxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g0ygl7brh"/><path class="h_luhebxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:backward-item"} {...others} />);
}

export default Component;
