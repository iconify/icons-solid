import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdh2c7bev.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zdh2c7bev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:rumble-strip"} {...others} />);
}

export default Component;
