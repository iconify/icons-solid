import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-llkv2cb.css';
import '../../css/s/s0urbhscb.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/u/utvvupbkr.css';

const viewBox = {"width":512,"height":512};
const content = `<radialGradient id="SVG1f7iscIR" cx="112.324" cy="536.785" r="1.331" gradientTransform="matrix(0 228.342 228.342 0 -122314.648 -25440.303)" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset=".421" class="s0urbhscb"/><stop offset="1" class="vc--wpv5i"/></radialGradient><path fill="url(#SVG1f7iscIR)" class="utvvupbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:onyka-light"} {...others} />);
}

export default Component;
