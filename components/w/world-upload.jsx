import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wzdxwkb-z.css';
import '../../css/x/xrk5i0byg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wzdxwkb-z"/><path class="xrk5i0byg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-upload"} {...others} />);
}

export default Component;
