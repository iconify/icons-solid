import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8l6et5rf.css';
import '../../css/z/z5062sbcf.css';
import '../../css/l/lhq65-fqo.css';
import '../../css/m/mzvv3wnof.css';
import '../../css/t/thyfvir0z.css';
import '../../css/v/vwzgu58tk.css';
import '../../css/a/awp1y8bus.css';
import '../../css/v/v3zqawb-i.css';
import '../../css/s/s_o2f6bka.css';
import '../../css/o/ouaw71r7c.css';
import '../../css/t/tnbus8bzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r8l6et5rf"/><path class="z5062sbcf"/><circle class="lhq65-fqo"/><circle class="mzvv3wnof"/><path class="thyfvir0z"/><path class="vwzgu58tk"/><circle class="awp1y8bus"/><circle class="v3zqawb-i"/><circle class="s_o2f6bka"/><circle class="ouaw71r7c"/><circle class="tnbus8bzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:service-discovery"} {...others} />);
}

export default Component;
