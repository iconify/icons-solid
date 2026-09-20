import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rachw9boo.css';
import '../../css/c/ccexqgbag.css';
import '../../css/f/fhnye3b1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rachw9boo"/><path class="ccexqgbag"/><path class="fhnye3b1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-ring-linear"} {...others} />);
}

export default Component;
