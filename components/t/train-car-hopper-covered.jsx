import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-4ae2bhy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f-4ae2bhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:train-car-hopper-covered"} {...others} />);
}

export default Component;
