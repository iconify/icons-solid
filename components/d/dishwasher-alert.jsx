import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xaod-urcv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xaod-urcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:dishwasher-alert"} {...others} />);
}

export default Component;
