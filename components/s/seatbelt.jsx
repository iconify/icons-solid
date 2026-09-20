import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-e_1xbae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k-e_1xbae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:seatbelt"} {...others} />);
}

export default Component;
