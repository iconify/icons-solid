import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pt_hf2bra.css';
import '../../css/n/n982v5bwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pt_hf2bra"/><path class="n982v5bwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-up"} {...others} />);
}

export default Component;
