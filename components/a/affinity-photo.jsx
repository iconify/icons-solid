import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuf42lb8e.css';
import '../../css/j/jl4_srbob.css';
import '../../css/p/p_cboygnm.css';
import '../../css/t/tzx4kvbxd.css';
import '../../css/f/f7510fb3e.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g class="kuf42lb8e"><path class="jl4_srbob"/><path fill="url(#SVG7nUC5d1i)" transform="translate(-2597.98)" class="p_cboygnm"/><defs><radialGradient id="SVG7nUC5d1i" cx="0" cy="0" r="1" gradientTransform="translate(3341.03 -89.259)scale(1038.25)" gradientUnits="userSpaceOnUse"><stop offset="0" class="tzx4kvbxd"/><stop offset="1" class="f7510fb3e"/></radialGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:affinity-photo"} {...others} />);
}

export default Component;
