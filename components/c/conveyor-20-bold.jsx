import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kekwewb2q.css';
import '../../css/a/a52o52b2q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kekwewb2q"/><path class="a52o52b2q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:conveyor-20-bold"} {...others} />);
}

export default Component;
