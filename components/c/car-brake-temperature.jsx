import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h40y5cb7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h40y5cb7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:car-brake-temperature"} {...others} />);
}

export default Component;
