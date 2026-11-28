import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ff92u2cxd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c7j-pzbmc.css';
import '../../css/a/afle3tqih.css';
import '../../css/v/vx5leyywt.css';
import '../../css/f/fvq19ob3c.css';
import '../../css/y/ynpr8kb7h.css';
import '../../css/k/kiou4wbbi.css';
import '../../css/q/qhsp8qb_r.css';
import '../../css/a/a7yi683pt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ff92u2cxd secondary"/><g class="dt0cm9dhy primary"><path class="c7j-pzbmc"/><path class="afle3tqih"/><path class="vx5leyywt"/><path class="fvq19ob3c"/><path class="ynpr8kb7h"/><path class="kiou4wbbi"/><path class="qhsp8qb_r"/><path class="a7yi683pt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:grapevine-duo"} {...others} />);
}

export default Component;
