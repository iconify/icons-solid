import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im7t84bbc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="im7t84bbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:train-car-hopper"} {...others} />);
}

export default Component;
