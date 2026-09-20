import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yw5sq61bq.css';
import '../../css/p/pyi5zrbtm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yw5sq61bq"/><path class="pyi5zrbtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ambulance"} {...others} />);
}

export default Component;
