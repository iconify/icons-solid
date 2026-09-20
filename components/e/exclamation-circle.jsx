import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fjyp83b4c.css';
import '../../css/u/uscd_gbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="fjyp83b4c"/><path class="uscd_gbsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:exclamation-circle"} {...others} />);
}

export default Component;
