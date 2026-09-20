import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kr2c4etpz.css';
import '../../css/t/tl6e7qb8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kr2c4etpz"/><path class="tl6e7qb8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:login-1"} {...others} />);
}

export default Component;
