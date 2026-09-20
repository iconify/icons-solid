import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfi4u8c5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mfi4u8c5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:speaker-message"} {...others} />);
}

export default Component;
