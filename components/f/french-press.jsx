import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pk3xhwyxa.css';
import '../../css/a/aphr2zb5f.css';
import '../../css/l/luw9xg98y.css';
import '../../css/s/smksh43zd.css';
import '../../css/v/vm7niccle.css';
import '../../css/i/ibtwgprgl.css';
import '../../css/u/ulnks5std.css';
import '../../css/a/ahoxerbeq.css';
import '../../css/f/fpmmmibzz.css';
import '../../css/y/yj7_bob_s.css';
import '../../css/b/bo2tixb3u.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pk3xhwyxa"/><path class="aphr2zb5f"/><path class="luw9xg98y"/><path class="smksh43zd"/><path class="vm7niccle"/><path class="ibtwgprgl"/><path class="ulnks5std"/><path class="ahoxerbeq"/><path class="fpmmmibzz"/><path class="yj7_bob_s"/><path class="bo2tixb3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:french-press"} {...others} />);
}

export default Component;
