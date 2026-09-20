import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pc-74rser.css';
import '../../css/p/pz9e_6cdy.css';
import '../../css/n/nv3r1zbmr.css';
import '../../css/w/wzga5cc5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pc-74rser"/><path class="pz9e_6cdy"/><circle class="nv3r1zbmr"/><circle class="wzga5cc5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:shopping-cart"} {...others} />);
}

export default Component;
