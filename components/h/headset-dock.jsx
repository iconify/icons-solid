import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcg6f8bjk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wcg6f8bjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:headset-dock"} {...others} />);
}

export default Component;
