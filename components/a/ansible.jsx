import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt5pyeboi.css';
import '../../css/n/njpxlezen.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="mt5pyeboi"/><path class="njpxlezen"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:ansible"} {...others} />);
}

export default Component;
