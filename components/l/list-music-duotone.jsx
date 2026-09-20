import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eqlh5gr9l.css';
import '../../css/m/mfg4gqx2s.css';
import '../../css/e/ee0-i8bqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="eqlh5gr9l"/><path class="mfg4gqx2s"/><path class="ee0-i8bqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-music-duotone"} {...others} />);
}

export default Component;
