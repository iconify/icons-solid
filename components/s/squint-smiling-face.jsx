import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xug1g_b3t.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="xug1g_b3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:squint-smiling-face"} {...others} />);
}

export default Component;
