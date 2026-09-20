import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8-xutbpy.css';
import '../../css/r/rspfmxb9g.css';
import '../../css/o/ou8mbr17h.css';
import '../../css/i/imeoj89xa.css';
import '../../css/p/pu72xab7x.css';
import '../../css/s/su98wabap.css';
import '../../css/b/brys5x4an.css';
import '../../css/b/bkliftqvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k8-xutbpy"/><path class="rspfmxb9g"/><path class="ou8mbr17h"/><path class="imeoj89xa"/><path class="pu72xab7x"/><path class="su98wabap"/><path class="brys5x4an"/><path class="bkliftqvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:website-build"} {...others} />);
}

export default Component;
