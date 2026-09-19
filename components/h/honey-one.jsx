import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/u/u9qu0gbuv.css';
import '../../css/n/ngc3b5b7m.css';
import '../../css/l/lhctqbctq.css';
import '../../css/l/ldorkabkt.css';
import '../../css/a/awx4k5b9w.css';
import '../../css/f/f1wz13b0i.css';
import '../../css/m/mge_gxb2u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><rect transform="rotate(-46.025 4.929 13.224)" class="u9qu0gbuv"/><rect transform="rotate(-46.025 19.321 27.11)" class="ngc3b5b7m"/><rect transform="rotate(-46.025 6.443 18.855)" class="lhctqbctq"/><rect transform="rotate(-46.025 13.64 25.798)" class="ldorkabkt"/><rect transform="rotate(-46.025 7.265 25.205)" class="awx4k5b9w"/><path class="f1wz13b0i"/><path class="mge_gxb2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:honey-one"} {...others} />);
}

export default Component;
