import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/or_h92bxc.css';
import '../../css/o/o_0tn0bqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="or_h92bxc"/><path class="o_0tn0bqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:equipment-chest-press"} {...others} />);
}

export default Component;
