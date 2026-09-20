import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgbsngblv.css';
import '../../css/x/xdl23sb0e.css';
import '../../css/z/zeoo4g6pl.css';
import '../../css/y/y8vt2qb2w.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGOkkAZdmQ" x1="-49.964" x2="-49.043" y1="651.845" y2="651.845" gradientTransform="rotate(213.442 -42034.463 192420.086)scale(-576.777 576.7777)" gradientUnits="userSpaceOnUse"><stop offset="0" class="zgbsngblv"/><stop offset="1" class="xdl23sb0e"/></linearGradient><path fill="url(#SVGOkkAZdmQ)" class="zeoo4g6pl"/><linearGradient id="SVGqF3PDtsI" x1="-49.964" x2="-49.043" y1="652.268" y2="652.268" gradientTransform="rotate(213.442 -42034.927 192421.704)scale(-576.7776 576.7776)" gradientUnits="userSpaceOnUse"><stop offset="0" class="zgbsngblv"/><stop offset="1" class="xdl23sb0e"/></linearGradient><circle fill="url(#SVGqF3PDtsI)" class="y8vt2qb2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jfa-go"} {...others} />);
}

export default Component;
