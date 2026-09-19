import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdptjablm.css';
import '../../css/n/nsdrsoimu.css';
import '../../css/l/l88o95l5d.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="tdptjablm"><path clip-rule="evenodd" class="nsdrsoimu"/><path class="l88o95l5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:github"} {...others} />);
}

export default Component;
