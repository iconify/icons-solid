import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/is7w60blm.css';
import '../../css/s/sb8adabhc.css';
import '../../css/u/u9pq35-6e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="is7w60blm"/><path class="sb8adabhc"/><path class="u9pq35-6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:message-plus-20-bold"} {...others} />);
}

export default Component;
