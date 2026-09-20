import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hp49s6dbf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hp49s6dbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:oil-temperature"} {...others} />);
}

export default Component;
