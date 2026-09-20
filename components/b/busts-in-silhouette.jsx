import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kizuaabwv.css';
import '../../css/f/f752zdh8v.css';
import '../../css/a/a2fnrpfqj.css';
import '../../css/m/mn9vs5b5u.css';
import '../../css/i/igu7ed0ee.css';
import '../../css/i/i9dpk_r5q.css';
import '../../css/o/ogab8xbnt.css';
import '../../css/l/lkj5xubcp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kizuaabwv"/><path class="f752zdh8v"/><path class="a2fnrpfqj"/><path class="mn9vs5b5u"/><path class="igu7ed0ee"/><path class="i9dpk_r5q"/><path class="ogab8xbnt"/><path class="lkj5xubcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:busts-in-silhouette"} {...others} />);
}

export default Component;
