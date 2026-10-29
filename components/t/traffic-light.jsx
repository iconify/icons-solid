import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/smcm5jmyt.css';
import '../../css/g/g9_8kk_pt.css';
import '../../css/o/o27uyebyp.css';
import '../../css/d/da6y_kyci.css';
import '../../css/t/t6ppt9ymg.css';
import '../../css/j/j4rk3-x6p.css';
import '../../css/r/r6o8ijb-c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="smcm5jmyt wm-shadow"/><path class="g9_8kk_pt wm-shadow"/><path class="o27uyebyp"/><path class="da6y_kyci"/><path class="t6ppt9ymg"/><path class="j4rk3-x6p"/><path class="r6o8ijb-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:traffic-light"} {...others} />);
}

export default Component;
