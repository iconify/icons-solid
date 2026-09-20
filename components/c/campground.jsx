import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7x_w-bvh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x7x_w-bvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:campground"} {...others} />);
}

export default Component;
