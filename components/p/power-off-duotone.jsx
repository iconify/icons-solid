import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/ky8hevb5b.css';
import '../../css/a/ayo73pbzj.css';
import '../../css/f/fpew8tpjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ky8hevb5b"/><path class="ayo73pbzj"/><path class="fpew8tpjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:power-off-duotone"} {...others} />);
}

export default Component;
