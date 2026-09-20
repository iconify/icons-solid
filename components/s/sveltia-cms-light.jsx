import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/c/c11zejbed.css';
import '../../css/q/qx32gdm7x.css';
import '../../css/c/cgr3ne-9x.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGtt0I4dom" x1="256" x2="256" y1="512" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".964" class="c11zejbed"/><stop offset="1" class="qx32gdm7x"/></linearGradient><path fill="url(#SVGtt0I4dom)" class="cgr3ne-9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sveltia-cms-light"} {...others} />);
}

export default Component;
