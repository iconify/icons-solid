import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljbrb5xyb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ljbrb5xyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:diving-4-platforms"} {...others} />);
}

export default Component;
