import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j76p0in1i.css';
import '../../css/t/ttc468btu.css';
import '../../css/u/uii4avzkv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j76p0in1i"/><circle class="ttc468btu"/><circle class="uii4avzkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:shopping-cart-outline"} {...others} />);
}

export default Component;
