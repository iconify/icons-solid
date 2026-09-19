import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmh2ek7ud.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="bmh2ek7ud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:die-face6-small"} {...others} />);
}

export default Component;
