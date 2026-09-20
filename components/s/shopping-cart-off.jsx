import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p8svwz5rs.css';
import '../../css/m/mcxf-ac_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p8svwz5rs"/><path class="mcxf-ac_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-cart-off"} {...others} />);
}

export default Component;
