import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zzl2_g5gk.css';
import '../../css/j/j7qjn6psg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zzl2_g5gk"/><path class="j7qjn6psg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-map"} {...others} />);
}

export default Component;
