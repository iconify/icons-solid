import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/ce0gr_brx.css';
import '../../css/z/z_vgp2vfm.css';
import '../../css/u/u88wzbcmc.css';
import '../../css/z/zpb9wxbsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ce0gr_brx wm-shadow"/><path class="wm-shadow z_vgp2vfm"/><path class="u88wzbcmc"/><path class="zpb9wxbsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:ruler"} {...others} />);
}

export default Component;
