import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xow_l-_ck.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="xow_l-_ck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:black-right-triangle-with-double-vertical-bar-filled"} {...others} />);
}

export default Component;
