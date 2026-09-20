import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9h3vbbla.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="g9h3vbbla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:briefcase-with-circular-pill-and-capsule-pill"} {...others} />);
}

export default Component;
