import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/moopqmbwo.css';
import '../../css/m/mn0o0sb_d.css';
import '../../css/k/kvvgt7e_b.css';
import '../../css/a/ayo73pbzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="moopqmbwo"/><path class="mn0o0sb_d"/><path class="kvvgt7e_b"/><path class="ayo73pbzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:eye-off-duotone"} {...others} />);
}

export default Component;
