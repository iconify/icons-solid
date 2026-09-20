import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xxziz3sld.css';
import '../../css/l/l4pr92b0j.css';
import '../../css/q/qrpe6ib7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xxziz3sld"/><path class="l4pr92b0j"/><path class="qrpe6ib7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sofa-line-duotone"} {...others} />);
}

export default Component;
