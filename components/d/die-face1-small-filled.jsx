import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu6gvgk1c.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="vu6gvgk1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:die-face1-small-filled"} {...others} />);
}

export default Component;
