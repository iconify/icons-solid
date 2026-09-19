import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6bk4pu6o.css';
import '../../css/j/j7r8t5bzq.css';
import '../../css/g/gu8gak4xx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n6bk4pu6o"/><rect class="j7r8t5bzq"/><rect class="gu8gak4xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:between-horizontal-end-filled"} {...others} />);
}

export default Component;
