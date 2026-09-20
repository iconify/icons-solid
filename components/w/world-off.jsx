import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/utijszb0n.css';
import '../../css/r/r_bj5hb7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="utijszb0n"/><path class="r_bj5hb7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-off"} {...others} />);
}

export default Component;
