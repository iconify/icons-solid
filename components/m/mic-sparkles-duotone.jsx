import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/guz1wgyhn.css';
import '../../css/l/lxr-c948j.css';
import '../../css/z/zul96_whq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="guz1wgyhn"/><path class="lxr-c948j"/><path class="zul96_whq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mic-sparkles-duotone"} {...others} />);
}

export default Component;
