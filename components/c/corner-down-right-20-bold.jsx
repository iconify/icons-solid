import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdmlx9xfd.css';
import '../../css/n/n4jpvghns.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hdmlx9xfd"/><path class="n4jpvghns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-down-right-20-bold"} {...others} />);
}

export default Component;
