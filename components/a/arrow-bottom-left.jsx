import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6rjw2b9s.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="w6rjw2b9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:arrow-bottom-left"} {...others} />);
}

export default Component;
