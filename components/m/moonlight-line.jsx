import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cc-xlvwvo.css';
import '../../css/q/qsgxnsjgl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cc-xlvwvo"/><path class="qsgxnsjgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:moonlight-line"} {...others} />);
}

export default Component;
