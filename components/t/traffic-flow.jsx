import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ep-7nhd8y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ep-7nhd8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:traffic-flow"} {...others} />);
}

export default Component;
