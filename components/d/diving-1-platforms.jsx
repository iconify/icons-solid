import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz4z-d47e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="oz4z-d47e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:diving-1-platforms"} {...others} />);
}

export default Component;
