import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/is7w60blm.css';
import '../../css/a/axtvywb0e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="is7w60blm"/><path class="axtvywb0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:message-check-20-bold"} {...others} />);
}

export default Component;
