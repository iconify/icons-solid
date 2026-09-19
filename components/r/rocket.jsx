import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzrofvbmd.css';
import '../../css/z/zdu6p8bvj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rzrofvbmd"/><path class="zdu6p8bvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:rocket"} {...others} />);
}

export default Component;
