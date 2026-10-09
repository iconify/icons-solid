import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qslbzsqwh.css';
import '../../css/t/tg_1r3b9p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qslbzsqwh"/><path class="tg_1r3b9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-bolt-20-bold"} {...others} />);
}

export default Component;
