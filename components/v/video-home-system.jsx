import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrrjxl14w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrrjxl14w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:video-home-system"} {...others} />);
}

export default Component;
