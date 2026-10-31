import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/s/sgb-avbun.css';
import '../../css/u/ucxw9w5zg.css';
import '../../css/h/hjgeki6fo.css';
import '../../css/m/majpx7bjt.css';
import '../../css/x/x_x3bcmmi.css';
import '../../css/v/v6v9x8b3q.css';
import '../../css/q/q1v47cbqh.css';
import '../../css/d/dbq26pbkl.css';
import '../../css/u/ubycpemlz.css';
import '../../css/n/n0_ilfptm.css';
import '../../css/b/b1auijbmy.css';
import '../../css/n/n8rbzhbne.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="sgb-avbun"/><path class="ucxw9w5zg"/><path class="hjgeki6fo"/><path class="majpx7bjt"/><path class="x_x3bcmmi"/><path class="v6v9x8b3q"/><path class="q1v47cbqh"/><path class="dbq26pbkl"/><path class="ubycpemlz"/><path class="n0_ilfptm"/><path class="b1auijbmy"/><path class="n8rbzhbne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:jersey"} {...others} />);
}

export default Component;
