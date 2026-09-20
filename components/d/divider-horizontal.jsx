import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j28c1wjbm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j28c1wjbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:divider-horizontal"} {...others} />);
}

export default Component;
