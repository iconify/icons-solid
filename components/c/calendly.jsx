import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbeom1blt.css';
import '../../css/k/kb9-cibvx.css';
import '../../css/y/yqqqumb8z.css';
import '../../css/s/su41t4f1a.css';

const viewBox = {"width":841.89,"height":595.28};
const content = `<defs><path id="SVGhusBEc7M" class="mbeom1blt"/></defs><path class="kb9-cibvx"/><path class="yqqqumb8z"/><path class="su41t4f1a"/><use href="#SVGhusBEc7M"/><use href="#SVGhusBEc7M"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:calendly"} {...others} />);
}

export default Component;
