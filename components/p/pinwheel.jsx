import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/m/mup8g7b5c.css';
import '../../css/a/ab9dwqbbf.css';
import '../../css/n/nxj38bc5d.css';
import '../../css/a/a5p3e71_q.css';
import '../../css/s/svc080bxp.css';
import '../../css/w/w1jfe9bcf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="mup8g7b5c"/><path class="ab9dwqbbf"/><path class="nxj38bc5d"/><path class="a5p3e71_q"/><path class="svc080bxp"/><path class="w1jfe9bcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:pinwheel"} {...others} />);
}

export default Component;
