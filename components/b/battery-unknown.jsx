import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yy2k3-b7v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yy2k3-b7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:battery-unknown"} {...others} />);
}

export default Component;
