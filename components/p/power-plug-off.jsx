import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvdp7_lgp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yvdp7_lgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:power-plug-off"} {...others} />);
}

export default Component;
