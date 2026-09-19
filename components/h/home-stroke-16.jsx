import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1k29ppvh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d1k29ppvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:home-stroke-16"} {...others} />);
}

export default Component;
