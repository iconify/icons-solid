import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xic0yhb9p.css';
import '../../css/l/lbt5_vw5t.css';
import '../../css/t/tqcxtn8zv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xic0yhb9p"/><path class="lbt5_vw5t"/><path class="tqcxtn8zv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sofa-3-line-duotone"} {...others} />);
}

export default Component;
