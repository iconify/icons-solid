import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pt1vj9bim.css';
import '../../css/m/mi5_bgb0n.css';
import '../../css/n/nxeppyb-a.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pt1vj9bim"/><path class="mi5_bgb0n"/><path class="nxeppyb-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:envoy"} {...others} />);
}

export default Component;
