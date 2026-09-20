import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/igxfmq7zv.css';
import '../../css/c/c4_ekwb-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="igxfmq7zv"/><path class="c4_ekwb-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-sim-1"} {...others} />);
}

export default Component;
