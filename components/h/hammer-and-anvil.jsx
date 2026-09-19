import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvilx1q3c.css';
import '../../css/z/z4t_q8ban.css';
import '../../css/b/boi2cq1kx.css';
import '../../css/n/nkyq2pxpo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="kvilx1q3c"><path class="z4t_q8ban"/><rect class="boi2cq1kx"/><path class="nkyq2pxpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hammer-and-anvil"} {...others} />);
}

export default Component;
