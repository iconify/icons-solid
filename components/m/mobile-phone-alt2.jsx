import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6p7f05an.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="j6p7f05an"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:mobile-phone-alt2"} {...others} />);
}

export default Component;
