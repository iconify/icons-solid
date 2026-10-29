import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obuk6_0gn.css';
import '../../css/a/azolbb4yn.css';
import '../../css/x/xxqak_76w.css';
import '../../css/r/rlavracrm.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="obuk6_0gn"/><path class="azolbb4yn"/><path class="xxqak_76w"/><path class="rlavracrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:firebase"} {...others} />);
}

export default Component;
