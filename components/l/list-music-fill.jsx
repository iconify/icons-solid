import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mfg4gqx2s.css';
import '../../css/p/pab-zmevq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mfg4gqx2s"/><path class="pab-zmevq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-music-fill"} {...others} />);
}

export default Component;
