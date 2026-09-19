import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_4ieh74j.css';
import '../../css/e/et458ylyp.css';
import '../../css/s/s2ms_0w6v.css';
import '../../css/j/jko7jdb1p.css';
import '../../css/k/k1uq304yb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="c_4ieh74j"/><path class="et458ylyp"/><path class="s2ms_0w6v"/><path class="jko7jdb1p"/><circle transform="matrix(0 -1 -1 0 10 14)" class="k1uq304yb"/><circle transform="matrix(0 -1 -1 0 16 14)" class="k1uq304yb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:upload-web"} {...others} />);
}

export default Component;
