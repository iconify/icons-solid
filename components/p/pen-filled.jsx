import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kem-rcb_x.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><path id="SVG9pcnZPUV" class="kem-rcb_x"/></defs><use href="#SVG9pcnZPUV" transform="translate(42.667 53.333)" class="d2kvgvbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:pen-filled"} {...others} />);
}

export default Component;
