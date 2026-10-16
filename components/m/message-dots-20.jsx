import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itmoa867s.css';
import '../../css/n/nhhca1beb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="itmoa867s"/><path class="nhhca1beb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:message-dots-20"} {...others} />);
}

export default Component;
