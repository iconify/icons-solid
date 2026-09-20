import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rggt-cc5h.css';
import '../../css/z/zxnpu1bvo.css';
import '../../css/l/lqeh9j7ag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rggt-cc5h"/><circle class="zxnpu1bvo"/><circle class="lqeh9j7ag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:shopping-cart-line"} {...others} />);
}

export default Component;
