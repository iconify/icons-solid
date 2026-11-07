import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pz0i4phzj.css';
import '../../css/r/r2k_xpb5z.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/y/ymoj7fw8s.css';
import '../../css/y/yd_hzrbep.css';
import '../../css/c/cumps5j8w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pz0i4phzj"/><path class="r2k_xpb5z"/><g class="xtpeb-edw"><path class="ymoj7fw8s"/><path class="yd_hzrbep"/><path class="cumps5j8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:crop-bold-duotone"} {...others} />);
}

export default Component;
