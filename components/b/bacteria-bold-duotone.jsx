import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqppmvbnn.css';
import '../../css/g/gtvelac0o.css';
import '../../css/q/qzx-5b9ms.css';
import '../../css/i/iaid-962v.css';
import '../../css/m/mdeua2bvt.css';
import '../../css/c/co1sp2b0p.css';
import '../../css/b/b2n3mngam.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wqppmvbnn"/><path class="gtvelac0o"/><path class="qzx-5b9ms"/><path class="iaid-962v"/><path class="mdeua2bvt"/><path class="co1sp2b0p"/><path class="b2n3mngam"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bacteria-bold-duotone"} {...others} />);
}

export default Component;
