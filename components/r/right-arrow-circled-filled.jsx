import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqt70smsd.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="dqt70smsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:right-arrow-circled-filled"} {...others} />);
}

export default Component;
