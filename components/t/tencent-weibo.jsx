import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qohmh9b5t.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="qohmh9b5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:tencent-weibo"} {...others} />);
}

export default Component;
