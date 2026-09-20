import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/d/dx3xswb7m.css';
import '../../css/h/hx_-lzbsl.css';
import '../../css/w/whehe9bkq.css';
import '../../css/k/kbo3xjmiu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="dx3xswb7m"/><path class="hx_-lzbsl"/><path class="whehe9bkq"/><path class="kbo3xjmiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:shipment-check"} {...others} />);
}

export default Component;
