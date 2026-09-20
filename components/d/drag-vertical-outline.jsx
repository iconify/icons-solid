import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/et8rym2vl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="et8rym2vl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:drag-vertical-outline"} {...others} />);
}

export default Component;
