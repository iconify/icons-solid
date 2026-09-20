import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uymgdabjo.css';
import '../../css/r/rbqrbwg5g.css';
import '../../css/w/wxkcapblc.css';
import '../../css/f/fjrp1gtly.css';
import '../../css/j/jap21n4nr.css';
import '../../css/q/q_ysupb6u.css';
import '../../css/j/ja6afcb7v.css';
import '../../css/d/d5zhypz0y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uymgdabjo"/><path class="rbqrbwg5g"/><path class="wxkcapblc"/><path class="fjrp1gtly"/><path class="jap21n4nr"/><path class="q_ysupb6u"/><path class="ja6afcb7v"/><path class="d5zhypz0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:pile-of-poo"} {...others} />);
}

export default Component;
