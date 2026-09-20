import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqfx_u2ad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sqfx_u2ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:solar-power-variant"} {...others} />);
}

export default Component;
