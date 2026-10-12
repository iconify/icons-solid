import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibm1vrbdc.css';
import '../../css/k/k_93etbwr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ibm1vrbdc"/><path class="k_93etbwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plunger-20-bold"} {...others} />);
}

export default Component;
