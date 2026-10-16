import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ui-3y7kiv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ui-3y7kiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plane-takeoff-20"} {...others} />);
}

export default Component;
