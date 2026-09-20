import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y00yb5b9o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y00yb5b9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:food-takeout-box-outline"} {...others} />);
}

export default Component;
