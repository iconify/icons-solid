import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hwe2avbpg.css';
import '../../css/u/u8lb0ebnm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hwe2avbpg"/><path class="u8lb0ebnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:home-pin"} {...others} />);
}

export default Component;
