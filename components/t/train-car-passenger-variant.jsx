import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_v0kzl5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g_v0kzl5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:train-car-passenger-variant"} {...others} />);
}

export default Component;
