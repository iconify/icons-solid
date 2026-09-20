import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rea7h29_j.css';
import '../../css/d/dqapyabwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rea7h29_j"/><circle class="dqapyabwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:list-music"} {...others} />);
}

export default Component;
