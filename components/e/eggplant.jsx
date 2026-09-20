import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_rbrccys.css';
import '../../css/q/q96u87kvh.css';
import '../../css/c/cda9yhbng.css';
import '../../css/p/pmaqu_39k.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/h/hqz-hdu8d.css';
import '../../css/d/de6hi5bmc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="i_rbrccys"/><path class="q96u87kvh"/><path class="cda9yhbng"/><path class="pmaqu_39k"/><g class="ij2x_72vy"><path class="hqz-hdu8d"/><path class="de6hi5bmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:eggplant"} {...others} />);
}

export default Component;
