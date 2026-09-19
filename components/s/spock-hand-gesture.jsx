import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g6xnss8uu.css';
import '../../css/p/pv5kapb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g6xnss8uu"/><path class="pv5kapb6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:spock-hand-gesture"} {...others} />);
}

export default Component;
