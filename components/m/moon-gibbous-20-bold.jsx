import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx2djpbfz.css';
import '../../css/w/w04ysbbuw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tx2djpbfz"/><path class="w04ysbbuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moon-gibbous-20-bold"} {...others} />);
}

export default Component;
