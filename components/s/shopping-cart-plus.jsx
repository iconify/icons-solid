import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l7x6plbef.css';
import '../../css/n/ninbyxn4w.css';
import '../../css/n/nv3r1zbmr.css';
import '../../css/w/wzga5cc5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l7x6plbef"/><path class="ninbyxn4w"/><circle class="nv3r1zbmr"/><circle class="wzga5cc5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:shopping-cart-plus"} {...others} />);
}

export default Component;
