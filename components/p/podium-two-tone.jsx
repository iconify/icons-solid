import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hs-hx_bat.css';
import '../../css/u/umnetetzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hs-hx_bat"/><path class="umnetetzo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:podium-two-tone"} {...others} />);
}

export default Component;
