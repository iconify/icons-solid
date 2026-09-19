import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g73xeebej.css';
import '../../css/h/hemombbey.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="g73xeebej"/><path class="hemombbey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:ubuntu"} {...others} />);
}

export default Component;
