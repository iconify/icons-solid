import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v2ysml0ix.css';
import '../../css/a/ayo73pbzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v2ysml0ix"/><path class="ayo73pbzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:globe-off-fill"} {...others} />);
}

export default Component;
