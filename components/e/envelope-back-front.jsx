import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xechp_sbh.css';
import '../../css/v/vxj7e-s-k.css';
import '../../css/l/l281t6b-a.css';
import '../../css/u/uitk7ragu.css';
import '../../css/h/h3ii7g-6m.css';
import '../../css/m/mu4kw2okb.css';
import '../../css/a/a8ldc_b0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xechp_sbh"/><path class="vxj7e-s-k"/><path class="l281t6b-a"/><path class="uitk7ragu"/><path class="h3ii7g-6m"/><path class="mu4kw2okb"/><path class="a8ldc_b0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:envelope-back-front"} {...others} />);
}

export default Component;
