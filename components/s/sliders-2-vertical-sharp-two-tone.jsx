import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/puy7etbrg.css';
import '../../css/m/man0khbue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="puy7etbrg"/><path class="man0khbue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sliders-2-vertical-sharp-two-tone"} {...others} />);
}

export default Component;
