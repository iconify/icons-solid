import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rqh4y-aib.css';
import '../../css/v/vj9d97plr.css';
import '../../css/k/k8te4qbon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rqh4y-aib"/><path class="vj9d97plr"/><path class="k8te4qbon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:temperature-half-duotone"} {...others} />);
}

export default Component;
