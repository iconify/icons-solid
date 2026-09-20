import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0vmalbek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m0vmalbek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:message-arrow-right-outline"} {...others} />);
}

export default Component;
