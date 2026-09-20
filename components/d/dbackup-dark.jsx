import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv311ubob.css';
import '../../css/k/ka291wulv.css';
import '../../css/l/luyuy--wm.css';
import '../../css/r/r7ookxbjl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xv311ubob"/><path class="ka291wulv"/><path class="luyuy--wm"/><path class="r7ookxbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dbackup-dark"} {...others} />);
}

export default Component;
