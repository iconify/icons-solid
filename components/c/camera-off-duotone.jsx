import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i90ett96z.css';
import '../../css/q/qopxxhr1p.css';
import '../../css/u/uco51fb1f.css';
import '../../css/a/ayo73pbzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i90ett96z"/><path class="qopxxhr1p"/><path class="uco51fb1f"/><path class="ayo73pbzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:camera-off-duotone"} {...others} />);
}

export default Component;
