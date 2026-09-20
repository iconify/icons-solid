import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/a/aqtm5qurd.css';
import '../../css/k/k_u_5xb5m.css';
import '../../css/l/lfsoxomft.css';
import '../../css/e/epye99bse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="aqtm5qurd"/><path class="k_u_5xb5m"/><path class="lfsoxomft"/><path class="epye99bse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:transfer-truck-time"} {...others} />);
}

export default Component;
