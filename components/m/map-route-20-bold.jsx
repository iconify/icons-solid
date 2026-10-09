import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfl834tqx.css';
import '../../css/j/j77zeoa7b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gfl834tqx"/><path class="j77zeoa7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-route-20-bold"} {...others} />);
}

export default Component;
