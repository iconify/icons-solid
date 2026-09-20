import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-fc-4aoo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d-fc-4aoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:pan-horizontal"} {...others} />);
}

export default Component;
