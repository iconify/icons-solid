import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrgo4ebxh.css';
import '../../css/s/s0l3_tbqk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vrgo4ebxh"/><path class="s0l3_tbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tv-20"} {...others} />);
}

export default Component;
