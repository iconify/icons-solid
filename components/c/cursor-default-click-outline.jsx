import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh-0l9b2u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sh-0l9b2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:cursor-default-click-outline"} {...others} />);
}

export default Component;
