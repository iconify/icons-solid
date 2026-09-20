import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n5g3q8bii.css';
import '../../css/n/ned4scb6o.css';
import '../../css/o/ohvlkxycg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n5g3q8bii"/><path class="ned4scb6o"/><path class="ohvlkxycg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:universe"} {...others} />);
}

export default Component;
