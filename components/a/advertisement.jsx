import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r_q_79-7w.css';
import '../../css/g/g5i935bzv.css';
import '../../css/g/g8h9qw7uk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r_q_79-7w"/><path class="g5i935bzv"/><path class="g8h9qw7uk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:advertisement"} {...others} />);
}

export default Component;
