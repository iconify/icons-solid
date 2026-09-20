import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/ivxrekmga.css';
import '../../css/m/medoh8h0u.css';
import '../../css/q/qx2jmxlkz.css';
import '../../css/l/l-s5yyt6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ivxrekmga"/><path class="medoh8h0u"/><path class="qx2jmxlkz"/><path class="l-s5yyt6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:transfer-cart"} {...others} />);
}

export default Component;
