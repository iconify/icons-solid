import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yojqv_q0l.css';
import '../../css/v/vccsh913q.css';
import '../../css/w/wjrr5cb8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yojqv_q0l"/><circle class="vccsh913q"/><path class="wjrr5cb8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:radio-02"} {...others} />);
}

export default Component;
