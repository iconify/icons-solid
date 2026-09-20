import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pa7_6bc8x.css';
import '../../css/a/ayo73pbzj.css';
import '../../css/n/n_31o8b2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pa7_6bc8x"/><path class="ayo73pbzj"/><path class="n_31o8b2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:link-2-off-duotone"} {...others} />);
}

export default Component;
