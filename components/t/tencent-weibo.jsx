import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fy2-pue0o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fy2-pue0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:tencent-weibo"} {...others} />);
}

export default Component;
