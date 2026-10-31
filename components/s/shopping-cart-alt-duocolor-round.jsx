import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fqkx16gqv.css';
import '../../css/p/pw4-kacij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fqkx16gqv"/><path class="pw4-kacij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shopping-cart-alt-duocolor-round"} {...others} />);
}

export default Component;
