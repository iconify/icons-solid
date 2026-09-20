import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pk16079fy.css';
import '../../css/s/ssw2-urzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pk16079fy"/><path class="ssw2-urzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:folder-stats"} {...others} />);
}

export default Component;
