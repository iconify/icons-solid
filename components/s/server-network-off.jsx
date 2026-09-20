import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu_dek8wq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xu_dek8wq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:server-network-off"} {...others} />);
}

export default Component;
