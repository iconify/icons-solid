import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/piax8-b3f.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="piax8-b3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:thumbs-up-sign"} {...others} />);
}

export default Component;
