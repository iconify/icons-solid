import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwft_fjyp.css';
import '../../css/x/xsiz0b9vk.css';
import '../../css/q/qh_oalb4n.css';
import '../../css/p/plzboqz4g.css';
import '../../css/k/kn7zefg6w.css';
import '../../css/v/vlxa4pbeq.css';
import '../../css/h/hzf7q7brv.css';
import '../../css/y/yx4pt2bkv.css';
import '../../css/o/ookqb53cn.css';
import '../../css/c/cjlycgoog.css';
import '../../css/b/b7t2cubbw.css';
import '../../css/c/ce6-kmbly.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bwft_fjyp"/><path class="xsiz0b9vk"/><path class="qh_oalb4n"/><path class="plzboqz4g"/><path class="kn7zefg6w"/><path class="vlxa4pbeq"/><path class="hzf7q7brv"/><path class="yx4pt2bkv"/><path class="ookqb53cn"/><path class="cjlycgoog"/><path class="b7t2cubbw"/><path class="ce6-kmbly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:snail"} {...others} />);
}

export default Component;
