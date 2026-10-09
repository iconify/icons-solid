import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aem9n2zvr.css';
import '../../css/w/wqxi-7byp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aem9n2zvr"/><path class="wqxi-7byp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-combo-20"} {...others} />);
}

export default Component;
