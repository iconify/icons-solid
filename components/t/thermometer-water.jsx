import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pb_pa5bnx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pb_pa5bnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:thermometer-water"} {...others} />);
}

export default Component;
