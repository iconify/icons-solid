import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vzyz4ebqh.css';

const viewBox = {"width":368,"height":432};
const content = `<path class="vzyz4ebqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:notifications-paused"} {...others} />);
}

export default Component;
