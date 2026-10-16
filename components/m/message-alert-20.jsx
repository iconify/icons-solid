import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itmoa867s.css';
import '../../css/e/e5jh2b8fa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="itmoa867s"/><path class="e5jh2b8fa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:message-alert-20"} {...others} />);
}

export default Component;
