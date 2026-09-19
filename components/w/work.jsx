import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jps6s0bnh.css';
import '../../css/p/pimetfb9k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jps6s0bnh"/><path class="pimetfb9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:work"} {...others} />);
}

export default Component;
