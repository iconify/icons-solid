import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6mstu8gp.css';
import '../../css/p/p2cfd3dxv.css';
import '../../css/p/p61w3pb9j.css';
import '../../css/c/cx98hqbwm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s6mstu8gp"><path class="p2cfd3dxv"/><path class="p61w3pb9j"/><path class="cx98hqbwm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-asset-inventory"} {...others} />);
}

export default Component;
