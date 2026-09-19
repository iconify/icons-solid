import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rfdu8qvwb.css';
import '../../css/u/uu6zwkb3n.css';
import '../../css/g/g9o1zvaty.css';
import '../../css/p/pwmut0vcg.css';
import '../../css/x/xaaunht0n.css';
import '../../css/e/eyk905ctm.css';
import '../../css/s/sfcnqhbjp.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="rfdu8qvwb"/><path class="uu6zwkb3n"/><path class="g9o1zvaty"/><path class="pwmut0vcg"/><path class="xaaunht0n"/><path class="eyk905ctm"/><path class="sfcnqhbjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:tomcat-wordmark"} {...others} />);
}

export default Component;
