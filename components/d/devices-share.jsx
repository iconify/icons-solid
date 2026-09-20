import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p4r5sactc.css';
import '../../css/c/cksz3-dde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p4r5sactc"/><path class="cksz3-dde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:devices-share"} {...others} />);
}

export default Component;
