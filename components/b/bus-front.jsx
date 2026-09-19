import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/whdet7moo.css';
import '../../css/x/x216v_kvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="whdet7moo"/><path class="x216v_kvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bus-front"} {...others} />);
}

export default Component;
