import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn3kjzbic.css';
import '../../css/t/twtl22bnx.css';
import '../../css/l/l7kylvopx.css';
import '../../css/n/n--7ae4_v.css';
import '../../css/o/odt2m1bnh.css';
import '../../css/i/i94ktrahq.css';
import '../../css/y/ycmo7xb4s.css';
import '../../css/e/ev7mruyyc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tn3kjzbic"/><path class="twtl22bnx"/><path class="l7kylvopx"/><path class="n--7ae4_v"/><path class="odt2m1bnh"/><path class="i94ktrahq"/><path class="ycmo7xb4s"/><path class="ev7mruyyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:irrigation-20"} {...others} />);
}

export default Component;
