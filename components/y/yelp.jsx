import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oe9w9bcjl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="oe9w9bcjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:yelp"} {...others} />);
}

export default Component;
