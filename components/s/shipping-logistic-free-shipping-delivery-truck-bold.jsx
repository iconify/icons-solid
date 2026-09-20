import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q--72vv7c.css';
import '../../css/c/cz0r6uwoz.css';
import '../../css/n/nf5-akdhf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q--72vv7c"/><path class="cz0r6uwoz"/><path class="nf5-akdhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipping-logistic-free-shipping-delivery-truck-bold"} {...others} />);
}

export default Component;
