import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pirs2csfw.css';
import '../../css/c/cnsfvccno.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pirs2csfw"/><path class="cnsfvccno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-airtag"} {...others} />);
}

export default Component;
