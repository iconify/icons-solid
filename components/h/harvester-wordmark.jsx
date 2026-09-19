import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/siao_abdn.css';
import '../../css/h/h1bx1sgau.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="siao_abdn"/><path class="h1bx1sgau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:harvester-wordmark"} {...others} />);
}

export default Component;
