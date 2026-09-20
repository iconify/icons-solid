import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uoawf8bpz.css';
import '../../css/h/hmuxfdcal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uoawf8bpz"/><path class="hmuxfdcal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:help-octagon"} {...others} />);
}

export default Component;
