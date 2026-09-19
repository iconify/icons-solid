import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njo7p1bqx.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="njo7p1bqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:table-tennis-paddle-and-ball"} {...others} />);
}

export default Component;
