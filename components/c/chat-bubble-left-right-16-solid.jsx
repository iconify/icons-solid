import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-wc1tbbt.css';
import '../../css/o/ozoz27b5u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k-wc1tbbt"/><path class="ozoz27b5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chat-bubble-left-right-16-solid"} {...others} />);
}

export default Component;
