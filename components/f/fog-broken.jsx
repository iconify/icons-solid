import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n58ssxigb.css';
import '../../css/l/lt7j86jjt.css';
import '../../css/t/tw2p-vbaq.css';
import '../../css/l/l6md27rub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="n58ssxigb"/><path class="lt7j86jjt"/><path class="tw2p-vbaq"/><path class="l6md27rub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fog-broken"} {...others} />);
}

export default Component;
