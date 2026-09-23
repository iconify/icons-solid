import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qh0_3ccet.css';
import '../../css/f/fpyqhobtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qh0_3ccet"/><path class="fpyqhobtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shopping-cart-sparkles"} {...others} />);
}

export default Component;
