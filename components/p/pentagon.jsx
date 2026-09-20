import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/h/hjjpf1b1p.css';
import '../../css/z/zs_rnb_3g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="hjjpf1b1p"/><path class="zs_rnb_3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:pentagon"} {...others} />);
}

export default Component;
