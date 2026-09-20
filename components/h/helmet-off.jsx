import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kk0-cgbnx.css';
import '../../css/v/vy3-83bqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kk0-cgbnx"/><path class="vy3-83bqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:helmet-off"} {...others} />);
}

export default Component;
