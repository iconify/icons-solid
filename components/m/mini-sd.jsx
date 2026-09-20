import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/st5_1o_9m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="st5_1o_9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:mini-sd"} {...others} />);
}

export default Component;
