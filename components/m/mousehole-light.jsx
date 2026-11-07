import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh-l097mh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zh-l097mh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mousehole-light"} {...others} />);
}

export default Component;
