import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg7c7ibcj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xg7c7ibcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:seed-off-outline"} {...others} />);
}

export default Component;
