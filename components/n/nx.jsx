import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/st5z-kkqa.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="st5z-kkqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nx"} {...others} />);
}

export default Component;
