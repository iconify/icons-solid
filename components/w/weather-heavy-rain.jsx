import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l98vq_bhi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l98vq_bhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:weather-heavy-rain"} {...others} />);
}

export default Component;
