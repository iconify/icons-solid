import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/np-7czb9e.css';
import '../../css/n/nk4fjxbrm.css';
import '../../css/c/cz0muqbyq.css';
import '../../css/l/lxgl7abwy.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="np-7czb9e"/><path class="nk4fjxbrm"/><path class="cz0muqbyq"/><path class="lxgl7abwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:woocommerce-wordmark"} {...others} />);
}

export default Component;
