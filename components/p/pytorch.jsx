import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohbddizm.css';
import '../../css/f/fjrjp3bov.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="rohbddizm"/><circle transform="rotate(-88.939 82.069 29.398)scale(.99997)" class="fjrjp3bov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:pytorch"} {...others} />);
}

export default Component;
