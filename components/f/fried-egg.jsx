import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ku8f-qb7m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ku8f-qb7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:fried-egg"} {...others} />);
}

export default Component;
