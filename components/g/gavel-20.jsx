import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltt_btmrh.css';
import '../../css/z/zjsm6-byf.css';
import '../../css/b/bxl44g1ui.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ltt_btmrh"/><path class="zjsm6-byf"/><path class="bxl44g1ui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gavel-20"} {...others} />);
}

export default Component;
