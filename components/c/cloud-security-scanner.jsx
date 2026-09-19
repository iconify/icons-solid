import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kfjjzabtq.css';
import '../../css/e/ejjve_p6h.css';
import '../../css/a/aomgmpfwm.css';
import '../../css/u/ug34zu5oh.css';
import '../../css/u/us2mqkb4l.css';
import '../../css/t/t5hx8157j.css';
import '../../css/x/xms9-bc-g.css';
import '../../css/x/x25xo2o_d.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="kfjjzabtq"/><path class="ejjve_p6h"/><path class="aomgmpfwm"/><path class="ug34zu5oh"/><path class="us2mqkb4l"/><path class="t5hx8157j"/><path class="xms9-bc-g"/><path class="x25xo2o_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-security-scanner"} {...others} />);
}

export default Component;
