import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1mwht5bg.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="p1mwht5bg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:smiling-face-with-open-mouth-and-smiling-eyes"} {...others} />);
}

export default Component;
