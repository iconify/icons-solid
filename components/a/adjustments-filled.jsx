import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3l2b5bal.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="l3l2b5bal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:adjustments-filled"} {...others} />);
}

export default Component;
