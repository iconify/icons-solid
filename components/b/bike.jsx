import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv3xpcbji.css';
import '../../css/u/ubqlaiu9a.css';
import '../../css/k/k6kp56six.css';
import '../../css/w/w0_zt21vg.css';
import '../../css/p/ph75h2blu.css';
import '../../css/x/xegca7biw.css';
import '../../css/t/tu_bvbbkp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gv3xpcbji wm-shadow"/><path class="ubqlaiu9a wm-k"/><path class="k6kp56six wm-k"/><path class="w0_zt21vg wm-a"/><path class="ph75h2blu wm-k"/><path class="wm-a xegca7biw"/><path class="tu_bvbbkp wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:bike"} {...others} />);
}

export default Component;
