import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d__i3j54m.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="d__i3j54m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:slightly-smiling-face-small"} {...others} />);
}

export default Component;
