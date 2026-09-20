import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmw1c5byt.css';
import '../../css/m/mxgse1e2t.css';
import '../../css/r/r4i8cdbyy.css';
import '../../css/l/lpdb7ep1f.css';
import '../../css/f/fsp6fzb4e.css';
import '../../css/s/ss38u-uex.css';
import '../../css/o/o8u5iybkx.css';
import '../../css/l/lwpit9pwr.css';
import '../../css/t/t_5jspbhp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nmw1c5byt"/><path class="mxgse1e2t"/><path class="r4i8cdbyy"/><path class="lpdb7ep1f"/><path class="fsp6fzb4e"/><path class="ss38u-uex"/><path class="o8u5iybkx"/><path class="lwpit9pwr"/><path class="t_5jspbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:doughnut-2"} {...others} />);
}

export default Component;
