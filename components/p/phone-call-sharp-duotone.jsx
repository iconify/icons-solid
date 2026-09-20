import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/ehmp1dbtn.css';
import '../../css/a/ap09rll1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="ehmp1dbtn"/><path class="ap09rll1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:phone-call-sharp-duotone"} {...others} />);
}

export default Component;
