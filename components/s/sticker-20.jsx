import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfvc9yb6v.css';
import '../../css/z/zg5f-yb0n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qfvc9yb6v"/><path class="zg5f-yb0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sticker-20"} {...others} />);
}

export default Component;
