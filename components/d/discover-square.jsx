import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tq9qcb-8l.css';
import '../../css/w/wbom373wg.css';
import '../../css/f/f5mkz9bge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tq9qcb-8l"/><path class="wbom373wg"/><path class="f5mkz9bge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:discover-square"} {...others} />);
}

export default Component;
