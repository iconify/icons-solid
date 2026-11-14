import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/omy4due_w.css';
import '../../css/a/ay-kp8bpl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="omy4due_w"/><path class="ay-kp8bpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:piggy-bank"} {...others} />);
}

export default Component;
