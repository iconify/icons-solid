import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5d2dxbxx.css';
import '../../css/p/ppcl3rr7n.css';
import '../../css/l/lxd_jw--n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s5d2dxbxx"/><rect class="ppcl3rr7n"/><path class="lxd_jw--n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:archive-outline"} {...others} />);
}

export default Component;
