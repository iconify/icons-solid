import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wosy2ac-x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wosy2ac-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:speedometer"} {...others} />);
}

export default Component;
