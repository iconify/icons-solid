import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sclg6dwza.css';
import '../../css/y/yl0-xxbup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sclg6dwza"/><path class="yl0-xxbup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cash-off"} {...others} />);
}

export default Component;
