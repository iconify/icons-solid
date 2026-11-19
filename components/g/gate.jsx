import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6tyn2y3f.css';
import '../../css/c/cel95e31f.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="f6tyn2y3f"/><path class="cel95e31f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:gate"} {...others} />);
}

export default Component;
