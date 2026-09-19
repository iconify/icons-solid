import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejfwa9bbe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ejfwa9bbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:arrow-down-alt2"} {...others} />);
}

export default Component;
