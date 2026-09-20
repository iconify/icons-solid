import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_9qz4bbt.css';
import '../../css/c/crdyn7bkv.css';
import '../../css/q/qq8at9bay.css';
import '../../css/z/zmjjswbpy.css';
import '../../css/c/cm77skb5v.css';
import '../../css/c/cqiyu8b0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x_9qz4bbt"/><path class="crdyn7bkv"/><path class="qq8at9bay"/><path class="zmjjswbpy"/><path class="cm77skb5v"/><path class="cqiyu8b0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:desktop-monitor-smiley"} {...others} />);
}

export default Component;
