import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bl1-n-b-w.css';
import '../../css/k/k5vk-bbnq.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bl1-n-b-w"/><path class="k5vk-bbnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:currency"} {...others} />);
}

export default Component;
