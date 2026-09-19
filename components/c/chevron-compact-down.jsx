import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5e1o2yxm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z5e1o2yxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:chevron-compact-down"} {...others} />);
}

export default Component;
