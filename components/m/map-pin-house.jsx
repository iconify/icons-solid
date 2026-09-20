import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d5m9196rl.css';
import '../../css/p/px2snqh4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d5m9196rl"/><circle class="px2snqh4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:map-pin-house"} {...others} />);
}

export default Component;
