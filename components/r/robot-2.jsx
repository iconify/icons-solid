import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mljv28b9n.css';
import '../../css/r/r6cq_tbhq.css';
import '../../css/f/fcm7ixb-r.css';
import '../../css/o/ok8upbcxu.css';
import '../../css/n/n1na8wbap.css';
import '../../css/r/r8k79-b1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mljv28b9n"/><path class="r6cq_tbhq"/><path class="fcm7ixb-r"/><g class="ok8upbcxu"><path class="n1na8wbap"/><path class="r8k79-b1h"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:robot-2"} {...others} />);
}

export default Component;
