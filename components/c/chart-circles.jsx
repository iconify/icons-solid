import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mpmsbpb3p.css';
import '../../css/e/en7axqbsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mpmsbpb3p"/><path class="en7axqbsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chart-circles"} {...others} />);
}

export default Component;
