import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyl66ccho.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nyl66ccho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:tencent-weibo"} {...others} />);
}

export default Component;
