import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/miv52rbxg.css';
import '../../css/v/v_r2u0_pg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="miv52rbxg"/><path class="v_r2u0_pg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:microchip"} {...others} />);
}

export default Component;
