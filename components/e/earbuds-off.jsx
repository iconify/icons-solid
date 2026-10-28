import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wy8w9q0xj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wy8w9q0xj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:earbuds-off"} {...others} />);
}

export default Component;
