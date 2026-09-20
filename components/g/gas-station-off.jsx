import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u1g94pbja.css';
import '../../css/v/v-z11g72x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u1g94pbja"/><path class="v-z11g72x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:gas-station-off"} {...others} />);
}

export default Component;
