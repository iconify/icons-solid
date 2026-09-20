import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agl78fbey.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="agl78fbey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:bookmark-filled"} {...others} />);
}

export default Component;
