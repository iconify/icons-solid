import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i27rwib3p.css';
import '../../css/m/m66-_7b9f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="i27rwib3p"/><path class="m66-_7b9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-places-traffic-sign-street-sign-traffic-travel"} {...others} />);
}

export default Component;
