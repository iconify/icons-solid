import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mi_hsf-aq.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="mi_hsf-aq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:swagger"} {...others} />);
}

export default Component;
