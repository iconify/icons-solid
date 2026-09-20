import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tfekr1crf.css';
import '../../css/n/n45_m9s2d.css';
import '../../css/i/i0l6phb6g.css';
import '../../css/n/ncb8vib8e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="tfekr1crf"/><rect class="n45_m9s2d"/><rect class="i0l6phb6g"/><rect class="ncb8vib8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-dashboard-layout-square-app-application-dashboard-home-layout-square"} {...others} />);
}

export default Component;
