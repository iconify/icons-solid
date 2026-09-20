import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj7m1sbdj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yj7m1sbdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:happy-solid"} {...others} />);
}

export default Component;
