import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqp_3fb8k.css';
import '../../css/u/uf8-wnb5o.css';
import '../../css/t/tllx82bmt.css';
import '../../css/l/la7lrkbrv.css';
import '../../css/z/zrz69756q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sqp_3fb8k"><circle class="uf8-wnb5o"/><circle class="tllx82bmt"/><circle class="la7lrkbrv"/><circle class="zrz69756q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:british-council"} {...others} />);
}

export default Component;
