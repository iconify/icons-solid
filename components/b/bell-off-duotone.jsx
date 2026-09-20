import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qi9ptyb9c.css';
import '../../css/k/k0efr-bef.css';
import '../../css/a/ayo73pbzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qi9ptyb9c"/><path class="k0efr-bef"/><path class="ayo73pbzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bell-off-duotone"} {...others} />);
}

export default Component;
