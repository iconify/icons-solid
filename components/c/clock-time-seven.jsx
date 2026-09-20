import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nabu3x5no.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nabu3x5no"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:clock-time-seven"} {...others} />);
}

export default Component;
