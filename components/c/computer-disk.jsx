import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/unc5j6bto.css';
import '../../css/v/vm-e55vwr.css';
import '../../css/e/eff-5l8kp.css';
import '../../css/r/rn67uwkjl.css';
import '../../css/g/gng429vop.css';
import '../../css/l/lisn65bvx.css';
import '../../css/f/foblq4dks.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/a/aatubjdwg.css';
import '../../css/a/aondtc8yt.css';
import '../../css/b/b8y35lb4f.css';
import '../../css/s/sho3tsbag.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="unc5j6bto"/><path class="vm-e55vwr"/><circle class="eff-5l8kp"/><path class="rn67uwkjl"/><path class="gng429vop"/><circle class="lisn65bvx"/><path class="foblq4dks"/><g class="ij2x_72vy"><path class="aatubjdwg"/><path class="aondtc8yt"/><circle class="b8y35lb4f"/><path class="sho3tsbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:computer-disk"} {...others} />);
}

export default Component;
