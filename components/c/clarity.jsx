import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3doyjoii.css';
import '../../css/m/mf9jpj7oz.css';
import '../../css/t/t4s-b1bpo.css';
import '../../css/t/te7q60mep.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="l3doyjoii"/><path class="mf9jpj7oz"/><path class="t4s-b1bpo"/><path class="te7q60mep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:clarity"} {...others} />);
}

export default Component;
