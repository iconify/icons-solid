import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n4-leiwdt.css';
import '../../css/m/mnqjcr06i.css';
import '../../css/s/sazi09x4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="n4-leiwdt"/><path class="mnqjcr06i"/><path class="sazi09x4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:plus-minus-linear"} {...others} />);
}

export default Component;
