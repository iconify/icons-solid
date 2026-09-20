import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-llkv2cb.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/y/yvef_mbda.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGOoGydekO" x1="142.799" x2="369.224" y1="454.17" y2="61.99" gradientTransform="matrix(1 0 0 -1 0 514.1)" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGOoGydekO)" class="yvef_mbda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:surrealdb-light"} {...others} />);
}

export default Component;
