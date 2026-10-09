import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnqtbnznq.css';
import '../../css/h/hq96i1lwn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xnqtbnznq"/><path class="hq96i1lwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:alarm-clock-20-bold"} {...others} />);
}

export default Component;
