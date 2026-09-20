import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyqtdp_mu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wyqtdp_mu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:donate-off-outline"} {...others} />);
}

export default Component;
