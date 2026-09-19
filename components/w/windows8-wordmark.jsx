import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/maq3uib2w.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="maq3uib2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:windows8-wordmark"} {...others} />);
}

export default Component;
