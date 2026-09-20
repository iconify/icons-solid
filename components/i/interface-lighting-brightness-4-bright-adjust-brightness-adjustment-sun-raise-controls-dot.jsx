import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/ksdo6_bvg.css';
import '../../css/f/fyssoz2ez.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="ksdo6_bvg"/><path class="fyssoz2ez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-lighting-brightness-4-bright-adjust-brightness-adjustment-sun-raise-controls-dot"} {...others} />);
}

export default Component;
