import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se2jd0tlq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="se2jd0tlq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:heart-outline-with-left-half-and-bottom-right-quarter"} {...others} />);
}

export default Component;
