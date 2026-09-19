import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq1btb-j.css';
import '../../css/k/kp152rzau.css';
import '../../css/n/ng3xsac9j.css';
import '../../css/d/djngwubqw.css';
import '../../css/k/kuc82bcnu.css';
import '../../css/l/l6uqygauo.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVG6uMEBcPj" x1="9" x2="9" y1="16.97" y2="1.03" gradientTransform="scale(7.11111)" gradientUnits="userSpaceOnUse"><stop offset="0" class="jkq1btb-j"/><stop offset=".16" class="kp152rzau"/><stop offset=".53" class="ng3xsac9j"/><stop offset=".82" class="djngwubqw"/><stop offset="1" class="kuc82bcnu"/></linearGradient></defs><path fill="url(#SVG6uMEBcPj)" class="l6uqygauo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:azuredevops"} {...others} />);
}

export default Component;
