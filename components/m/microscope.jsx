import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fgtx7zbou.css';
import '../../css/r/rz4lmd_wd.css';
import '../../css/p/p0__gb-of.css';
import '../../css/z/zp4s15b9k.css';
import '../../css/l/l32gl00fq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(90 10.21 12.8)" class="fgtx7zbou"/><path class="rz4lmd_wd"/><rect transform="rotate(90 8.96 1.7)" class="p0__gb-of"/><rect transform="rotate(-180 21.25 22.01)" class="zp4s15b9k"/><path class="l32gl00fq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:microscope"} {...others} />);
}

export default Component;
