import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l179bincs.css';
import '../../css/p/pd_h9evnz.css';
import '../../css/w/wjynhmb7l.css';
import '../../css/x/xm2_-ibkn.css';
import '../../css/z/zv1--mbao.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l179bincs"/><path class="pd_h9evnz"/><path class="wjynhmb7l"/><path class="xm2_-ibkn"/><path class="zv1--mbao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-pump-20-bold"} {...others} />);
}

export default Component;
