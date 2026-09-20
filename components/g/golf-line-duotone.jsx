import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f2jbpwb_z.css';
import '../../css/y/ya4v2ogmm.css';
import '../../css/m/mxy6aifea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><ellipse class="f2jbpwb_z"/><path class="ya4v2ogmm"/><path class="mxy6aifea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:golf-line-duotone"} {...others} />);
}

export default Component;
