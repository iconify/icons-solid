import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1ofdbc8y.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="t1ofdbc8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:christmas-tree"} {...others} />);
}

export default Component;
