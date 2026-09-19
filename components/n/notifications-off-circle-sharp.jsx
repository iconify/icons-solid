import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdyizyb3e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tdyizyb3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:notifications-off-circle-sharp"} {...others} />);
}

export default Component;
