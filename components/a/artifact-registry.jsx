import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7sr6ubzr.css';
import '../../css/f/fi80j8ftq.css';
import '../../css/s/snsshcc8d.css';
import '../../css/m/mema0sunq.css';
import '../../css/d/d-u1h9j3z.css';
import '../../css/y/ybaa8sq4s.css';
import '../../css/m/m4sbj4bid.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/er4vmq6or.css';
import '../../css/o/op8bxuz8m.css';
import '../../css/a/amkye8neh.css';
import '../../css/n/n42r7sbnx.css';
import '../../css/t/t19ly4bed.css';
import '../../css/g/g5y-fedkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7sr6ubzr"/><path class="fi80j8ftq"/><path class="snsshcc8d"/><path class="mema0sunq"/><path class="d-u1h9j3z"/><path class="ybaa8sq4s"/><path class="m4sbj4bid"/><g class="d2kvgvbvc"><path class="er4vmq6or"/><path class="op8bxuz8m"/><path class="amkye8neh"/><path class="n42r7sbnx"/><path class="t19ly4bed"/><path class="g5y-fedkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:artifact-registry"} {...others} />);
}

export default Component;
