import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk7uvj89p.css';
import '../../css/x/xeh4-vd6j.css';
import '../../css/a/aco2bfbpe.css';
import '../../css/w/wwp60d8-m.css';
import '../../css/k/kq2vdjj8s.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGtrINWcRe" x1="0" x2="128" y1="67.2" y2="67.2" gradientTransform="matrix(1 0 0 -1 0 129.9)" gradientUnits="userSpaceOnUse"><stop offset="0" class="sk7uvj89p"/><stop offset="1" class="xeh4-vd6j"/></linearGradient><linearGradient id="SVGxCJ8hcAu" x1="0" x2="128" y1="68.2" y2="68.2" gradientTransform="matrix(1 0 0 -1 0 129.9)" gradientUnits="userSpaceOnUse"><stop offset="0" class="sk7uvj89p"/><stop offset="1" class="xeh4-vd6j"/></linearGradient></defs><path class="aco2bfbpe st2"/><circle class="st2 wwp60d8-m"/><path fill="url(#SVGtrINWcRe)" class="aco2bfbpe"/><circle fill="url(#SVGxCJ8hcAu)" class="wwp60d8-m"/><path class="kq2vdjj8s st2"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:starship-wordmark"} {...others} />);
}

export default Component;
