import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i5i8ipbec.css';
import '../../css/g/g61indbgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i5i8ipbec"/><path class="g61indbgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:usb-fill"} {...others} />);
}

export default Component;
