import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpfq5ioxf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="fpfq5ioxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:message-x-outline"} {...others} />);
}

export default Component;
