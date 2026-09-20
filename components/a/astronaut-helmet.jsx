import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q5y5uqbqi.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/r/riz4zb60p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q5y5uqbqi"/><circle class="h_tsn8bxt"/><path class="riz4zb60p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:astronaut-helmet"} {...others} />);
}

export default Component;
