import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfjr1obov.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yfjr1obov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:geyser-outline-from-water"} {...others} />);
}

export default Component;
