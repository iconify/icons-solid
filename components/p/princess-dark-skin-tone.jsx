import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwtf52b2y.css';
import '../../css/k/kbuay5b_y.css';
import '../../css/j/jlaf5jb2q.css';
import '../../css/t/tj2_hylcq.css';
import '../../css/x/xet5mybbh.css';
import '../../css/s/sjv8lrb5m.css';
import '../../css/i/ixy0vklsb.css';
import '../../css/h/hniumccqz.css';
import '../../css/t/t_mrjsbkh.css';
import '../../css/x/xuv5lg21j.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hwtf52b2y"/><path class="kbuay5b_y"/><path class="jlaf5jb2q"/><path class="tj2_hylcq"/><path class="xet5mybbh"/><path class="sjv8lrb5m"/><path class="ixy0vklsb"/><path class="hniumccqz"/><path class="t_mrjsbkh"/><path class="xuv5lg21j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:princess-dark-skin-tone"} {...others} />);
}

export default Component;
