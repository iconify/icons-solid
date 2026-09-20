import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy60gyb7n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gy60gyb7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:clock-time-one-outline"} {...others} />);
}

export default Component;
