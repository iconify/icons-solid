import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd9hy5b_u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pd9hy5b_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:clock-solid"} {...others} />);
}

export default Component;
