import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rsz1uxb_z.css';
import '../../css/u/u725udmen.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rsz1uxb_z"/><path class="u725udmen"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:layers-subtract"} {...others} />);
}

export default Component;
