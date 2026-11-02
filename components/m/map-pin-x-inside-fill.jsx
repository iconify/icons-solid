import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlk0x0bsy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mlk0x0bsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:map-pin-x-inside-fill"} {...others} />);
}

export default Component;
