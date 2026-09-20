import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uq1qurbeh.css';
import '../../css/y/yhoh7ubik.css';
import '../../css/o/og92yrbah.css';
import '../../css/f/fzisiobjw.css';
import '../../css/m/mhf-g-8fv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uq1qurbeh"/><path class="yhoh7ubik"/><path class="og92yrbah"/><path class="fzisiobjw"/><path class="mhf-g-8fv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:technology-device-wearable-smart-watch-circle-app-1"} {...others} />);
}

export default Component;
