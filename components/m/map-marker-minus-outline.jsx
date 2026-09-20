import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i408sxblv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i408sxblv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:map-marker-minus-outline"} {...others} />);
}

export default Component;
