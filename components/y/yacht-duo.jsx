import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oq0ttvbij.css';
import '../../css/k/k-ec91pho.css';
import '../../css/z/zvkmwrbhb.css';
import '../../css/s/sc9p7i35j.css';
import '../../css/e/e_vr_fbgx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="oq0ttvbij"/><path class="k-ec91pho"/><path class="zvkmwrbhb"/><path class="sc9p7i35j"/><path class="e_vr_fbgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:yacht-duo"} {...others} />);
}

export default Component;
