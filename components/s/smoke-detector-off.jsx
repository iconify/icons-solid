import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flw9b1kuh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="flw9b1kuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:smoke-detector-off"} {...others} />);
}

export default Component;
