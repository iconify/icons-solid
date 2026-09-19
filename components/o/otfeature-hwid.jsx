import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5f18eths.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="g5f18eths"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:otfeature-hwid"} {...others} />);
}

export default Component;
