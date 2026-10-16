import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx2djpbfz.css';
import '../../css/m/m1or6kb0k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tx2djpbfz"/><path class="m1or6kb0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moon-full-20-bold"} {...others} />);
}

export default Component;
