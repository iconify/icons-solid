import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/f/f9uqp6_rc.css';
import '../../css/k/kfawhz9uz.css';
import '../../css/t/t-dq_9l_t.css';
import '../../css/b/bal1zy7-l.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="f9uqp6_rc"/><path class="kfawhz9uz"/><path class="t-dq_9l_t"/><path class="bal1zy7-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:coins"} {...others} />);
}

export default Component;
