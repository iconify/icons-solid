import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rqrpuyb4y.css';
import '../../css/j/jlmi6db9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rqrpuyb4y"/><path class="jlmi6db9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rotate-ccw-square"} {...others} />);
}

export default Component;
