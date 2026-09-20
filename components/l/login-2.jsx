import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/kbscrrbji.css';
import '../../css/l/lme0_gb3d.css';
import '../../css/h/h44j9ws2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="kbscrrbji"/><path class="lme0_gb3d"/><path class="h44j9ws2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:login-2"} {...others} />);
}

export default Component;
