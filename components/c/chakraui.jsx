import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idg_8uiwz.css';
import '../../css/t/t_a4n6bgp.css';
import '../../css/x/xknpqhb_d.css';
import '../../css/s/s820uzbha.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGpPpwGeTk" x1="64" x2="64" y1="0" y2="128" gradientUnits="userSpaceOnUse"><stop offset="0" class="idg_8uiwz"/><stop offset="1" class="t_a4n6bgp"/></linearGradient></defs><circle fill="url(#SVGpPpwGeTk)" class="xknpqhb_d"/><path class="s820uzbha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:chakraui"} {...others} />);
}

export default Component;
