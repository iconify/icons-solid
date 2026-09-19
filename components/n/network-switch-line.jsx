import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-krhjb9m.css';
import '../../css/m/mpiv946-w.css';
import '../../css/m/mz5d4wbgm.css';
import '../../css/s/s2a7yel-p.css';
import '../../css/v/vh_d_6vor.css';
import '../../css/g/gv8y0mspx.css';
import '../../css/z/zisfjpbgh.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 e-krhjb9m"/><path class="clr-i-outline clr-i-outline-path-2 mpiv946-w"/><path class="clr-i-outline clr-i-outline-path-3 mz5d4wbgm"/><path class="clr-i-outline clr-i-outline-path-4 s2a7yel-p"/><path class="clr-i-outline clr-i-outline-path-5 vh_d_6vor"/><path class="clr-i-outline clr-i-outline-path-6 gv8y0mspx"/><path class="clr-i-outline clr-i-outline-path-7 zisfjpbgh"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:network-switch-line"} {...others} />);
}

export default Component;
