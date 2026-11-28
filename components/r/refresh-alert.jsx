import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lj23aebvq.css';
import '../../css/x/xjc9s-bmu.css';
import '../../css/n/nxp26_bnf.css';
import '../../css/x/xqdgfebhz.css';
import '../../css/k/kl24nou1s.css';
import '../../css/e/eax49yc6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lj23aebvq"/><path class="xjc9s-bmu"/><path class="nxp26_bnf"/><path class="xqdgfebhz"/><path class="kl24nou1s"/><path class="eax49yc6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:refresh-alert"} {...others} />);
}

export default Component;
