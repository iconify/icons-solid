import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ai2oydg6c.css';
import '../../css/k/k9e-5ihoi.css';
import '../../css/y/ynfoavvdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ai2oydg6c"/><path class="k9e-5ihoi"/><path class="ynfoavvdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-4-line-duotone"} {...others} />);
}

export default Component;
