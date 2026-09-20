import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gv2jrdtmw.css';
import '../../css/v/v3unlcbeb.css';
import '../../css/s/spugqyaae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gv2jrdtmw"/><path class="v3unlcbeb"/><path class="spugqyaae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sun-dim-two-tone"} {...others} />);
}

export default Component;
