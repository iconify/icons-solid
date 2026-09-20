import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/djift2p2a.css';
import '../../css/g/gvi6q-b4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="djift2p2a"/><path class="gvi6q-b4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hand-finger"} {...others} />);
}

export default Component;
