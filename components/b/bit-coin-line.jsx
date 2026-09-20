import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-sqk0b_c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w-sqk0b_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:bit-coin-line"} {...others} />);
}

export default Component;
