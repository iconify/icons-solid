import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxv23u_pp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xxv23u_pp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:cake-layered"} {...others} />);
}

export default Component;
