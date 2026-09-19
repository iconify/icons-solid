import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eknvkdekp.css';
import '../../css/o/o2c0qr9ls.css';
import '../../css/a/abllbbbtj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="eknvkdekp"/><path class="o2c0qr9ls"/><path class="abllbbbtj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:avalanche"} {...others} />);
}

export default Component;
