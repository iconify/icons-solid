import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp_m7046n.css';
import '../../css/y/y2nhzjrjv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tp_m7046n"/><path class="y2nhzjrjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:send-20"} {...others} />);
}

export default Component;
