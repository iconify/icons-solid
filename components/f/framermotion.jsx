import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0bitc2fl.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="m0bitc2fl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:framermotion"} {...others} />);
}

export default Component;
