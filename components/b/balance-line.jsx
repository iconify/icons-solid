import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/enn-glb7f.css';
import '../../css/w/wyvj1zhbz.css';
import '../../css/q/qsha5gndl.css';
import '../../css/f/f3jve88va.css';
import '../../css/l/lp95v6wzc.css';
import '../../css/y/y1st3ob1c.css';
import '../../css/s/svc9cib5i.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 enn-glb7f"/><path class="clr-i-outline clr-i-outline-path-2 wyvj1zhbz"/><path class="clr-i-outline clr-i-outline-path-3 qsha5gndl"/><path class="clr-i-outline clr-i-outline-path-4 f3jve88va"/><path class="clr-i-outline clr-i-outline-path-5 lp95v6wzc"/><path class="clr-i-outline clr-i-outline-path-6 y1st3ob1c"/><path class="clr-i-outline clr-i-outline-path-7 svc9cib5i"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:balance-line"} {...others} />);
}

export default Component;
