import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pla65zbzp.css';
import '../../css/r/ryb_j8mxf.css';
import '../../css/o/o7xuaobry.css';
import '../../css/d/dbwncfbsa.css';
import '../../css/w/wp4-h8nij.css';
import '../../css/a/ar7ut_42l.css';
import '../../css/g/gmxekvbua.css';
import '../../css/s/srqr5gbwl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pla65zbzp"/><path class="ryb_j8mxf"/><path class="o7xuaobry"/><path class="dbwncfbsa"/><path class="wp4-h8nij"/><path class="ar7ut_42l"/><path class="gmxekvbua"/><path class="srqr5gbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-facade-48-bold"} {...others} />);
}

export default Component;
