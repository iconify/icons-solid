import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xrleuvbus.css';
import '../../css/w/weoga00hq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xrleuvbus"/><path class="weoga00hq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:map-pin-minus"} {...others} />);
}

export default Component;
