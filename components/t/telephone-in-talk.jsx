import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh85sebgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wh85sebgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:telephone-in-talk"} {...others} />);
}

export default Component;
