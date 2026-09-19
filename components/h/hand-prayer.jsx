import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vpllkcbpy.css';
import '../../css/w/wqnd57b-q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vpllkcbpy"/><path class="wqnd57b-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hand-prayer"} {...others} />);
}

export default Component;
