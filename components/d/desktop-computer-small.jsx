import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtw1_oswe.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="dtw1_oswe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:desktop-computer-small"} {...others} />);
}

export default Component;
