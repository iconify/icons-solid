import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9naz0aiw.css';
import '../../css/z/zh4vk3tqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u9naz0aiw"/><path class="zh4vk3tqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:security-key-enforcement"} {...others} />);
}

export default Component;
