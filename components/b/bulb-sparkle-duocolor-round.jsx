import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m5vfg-38a.css';
import '../../css/d/dcivgm2wg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m5vfg-38a"/><path class="dcivgm2wg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bulb-sparkle-duocolor-round"} {...others} />);
}

export default Component;
