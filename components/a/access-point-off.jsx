import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsm7hzbhq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wsm7hzbhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:access-point-off"} {...others} />);
}

export default Component;
