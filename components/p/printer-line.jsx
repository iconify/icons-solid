import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcc-o1b9v.css';
import '../../css/d/d6vy5dbmt.css';
import '../../css/y/yqdcx39ai.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 qcc-o1b9v"/><path class="clr-i-outline clr-i-outline-path-2 d6vy5dbmt"/><path class="clr-i-outline clr-i-outline-path-3 yqdcx39ai"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:printer-line"} {...others} />);
}

export default Component;
