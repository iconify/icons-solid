import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv3x2zbdk.css';

const viewBox = {"width":384,"height":432};
const content = `<path class="gv3x2zbdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:calendar-remove"} {...others} />);
}

export default Component;
