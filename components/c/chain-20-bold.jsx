import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agoxzxbge.css';
import '../../css/m/mb2ru1gou.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="agoxzxbge"/><path class="mb2ru1gou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chain-20-bold"} {...others} />);
}

export default Component;
