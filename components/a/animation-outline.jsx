import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9h-k4bhp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l9h-k4bhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:animation-outline"} {...others} />);
}

export default Component;
