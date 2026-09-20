import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh16x0bfw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yh16x0bfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:timing-shelf-down-outline"} {...others} />);
}

export default Component;
