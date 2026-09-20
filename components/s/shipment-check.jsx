import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hubh5y9go.css';
import '../../css/c/c2fxpvbht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hubh5y9go"/><path class="c2fxpvbht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:shipment-check"} {...others} />);
}

export default Component;
