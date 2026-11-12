import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgbsngblv.css';
import '../../css/x/xdl23sb0e.css';
import '../../css/z/zeoo4g6pl.css';
import '../../css/l/l6l9ukilj.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGlgHE0cux" x1="-49.964" x2="-49.043" y1="651.845" y2="651.845" gradientTransform="rotate(213.442 -42034.466 192420.085)scale(-576.77705 576.77771)" gradientUnits="userSpaceOnUse"><stop offset="0" class="zgbsngblv"/><stop offset="1" class="xdl23sb0e"/></linearGradient><path fill="url(#SVGlgHE0cux)" class="zeoo4g6pl"/><linearGradient id="SVGd5eeAuhM" x1="-49.964" x2="-49.043" y1="652.268" y2="652.268" gradientTransform="rotate(213.442 -42034.93 192421.697)scale(-576.77759 576.77759)" gradientUnits="userSpaceOnUse"><stop offset="0" class="zgbsngblv"/><stop offset="1" class="xdl23sb0e"/></linearGradient><circle fill="url(#SVGd5eeAuhM)" class="l6l9ukilj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jfa-go"} {...others} />);
}

export default Component;
