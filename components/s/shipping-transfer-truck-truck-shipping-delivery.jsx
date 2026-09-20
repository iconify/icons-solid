import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hjiigcffe.css';
import '../../css/d/dpcui9bzv.css';
import '../../css/b/b6-q3zz5m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="hjiigcffe"/><circle class="dpcui9bzv"/><circle class="b6-q3zz5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shipping-transfer-truck-truck-shipping-delivery"} {...others} />);
}

export default Component;
