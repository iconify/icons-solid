import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo4jgab5y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eo4jgab5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:notifications-outline"} {...others} />);
}

export default Component;
