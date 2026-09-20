import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nop6355ep.css';
import '../../css/m/mmld65ztq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nop6355ep"/><path class="mmld65ztq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:user-hexagon"} {...others} />);
}

export default Component;
