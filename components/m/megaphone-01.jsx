import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mq0gxh6nr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mq0gxh6nr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:megaphone-01"} {...others} />);
}

export default Component;
