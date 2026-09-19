import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pmdassb6b.css';
import '../../css/r/r391tharu.css';
import '../../css/n/nhznk4smx.css';
import '../../css/c/cb2wazo0z.css';
import '../../css/k/k1ou4_b5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pmdassb6b"/><path class="r391tharu"/><path class="nhznk4smx"/><path class="cb2wazo0z"/><path class="k1ou4_b5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:maps-location-01"} {...others} />);
}

export default Component;
