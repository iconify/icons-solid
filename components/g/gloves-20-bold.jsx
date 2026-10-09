import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhkum03mr.css';
import '../../css/k/k_bic86zu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hhkum03mr"/><path class="k_bic86zu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gloves-20-bold"} {...others} />);
}

export default Component;
