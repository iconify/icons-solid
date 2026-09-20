import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cfrzfmbbd.css';
import '../../css/u/uhk7vm7zq.css';
import '../../css/c/czbbm17fv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cfrzfmbbd"/><path class="uhk7vm7zq"/><path class="czbbm17fv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shopping-cart-duotone"} {...others} />);
}

export default Component;
