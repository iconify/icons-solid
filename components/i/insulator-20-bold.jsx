import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnyhe2b8p.css';
import '../../css/b/bo04lzb2u.css';
import '../../css/h/hlvegcbvn.css';
import '../../css/b/byjwp_p3c.css';
import '../../css/k/kofdfhm6u.css';
import '../../css/d/dur2k3bvs.css';
import '../../css/d/datizbbxs.css';
import '../../css/x/x9yma2zwt.css';
import '../../css/y/y-138ub9t.css';
import '../../css/x/xji5zq5gr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nnyhe2b8p"/><path class="bo04lzb2u"/><path class="hlvegcbvn"/><path class="byjwp_p3c"/><path class="kofdfhm6u"/><path class="dur2k3bvs"/><path class="datizbbxs"/><path class="x9yma2zwt"/><path class="y-138ub9t"/><path class="xji5zq5gr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:insulator-20-bold"} {...others} />);
}

export default Component;
