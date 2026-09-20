import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-a3-_mce.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h-a3-_mce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:av-timer"} {...others} />);
}

export default Component;
