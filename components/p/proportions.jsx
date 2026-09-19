import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kr-sjdb-r.css';
import '../../css/f/fuv59z16n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kr-sjdb-r"/><path class="fuv59z16n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:proportions"} {...others} />);
}

export default Component;
