import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xw0_rhs8q.css';

const viewBox = {"width":2304,"height":1536};
const content = `<path class="xw0_rhs8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:cc-paypal"} {...others} />);
}

export default Component;
