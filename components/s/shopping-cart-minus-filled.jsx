import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pud5wbbsm.css';
import '../../css/p/pz991cbha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pud5wbbsm"/><path class="pz991cbha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shopping-cart-minus-filled"} {...others} />);
}

export default Component;
