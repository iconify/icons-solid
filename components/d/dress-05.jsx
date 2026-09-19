import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qppjm3p4v.css';
import '../../css/r/r_j9rqbbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qppjm3p4v"/><path class="r_j9rqbbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dress-05"} {...others} />);
}

export default Component;
