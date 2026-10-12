import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2xs_abqk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e2xs_abqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:shopping-cart-fill-20"} {...others} />);
}

export default Component;
