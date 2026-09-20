import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p-qrmibls.css';
import '../../css/i/i6nrt8nnu.css';
import '../../css/e/ey97octmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="p-qrmibls"/><path class="i6nrt8nnu"/><path class="ey97octmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-ribbon-star-line-duotone"} {...others} />);
}

export default Component;
