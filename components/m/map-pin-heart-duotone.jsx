import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g7gekvbgt.css';
import '../../css/q/qwgg3xbzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g7gekvbgt"/><path class="qwgg3xbzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:map-pin-heart-duotone"} {...others} />);
}

export default Component;
