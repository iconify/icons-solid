import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8lzt5lna.css';
import '../../css/m/mvzjp1byq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x8lzt5lna"/><path class="mvzjp1byq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:move-vertical-20-bold"} {...others} />);
}

export default Component;
