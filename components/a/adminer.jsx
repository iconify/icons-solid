import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-kgf2jpm.css';
import '../../css/k/kje3pp6ll.css';
import '../../css/g/gp-ljubwj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="v-kgf2jpm"/><path class="kje3pp6ll"/><path class="gp-ljubwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:adminer"} {...others} />);
}

export default Component;
