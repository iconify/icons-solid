import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v9u8nhb5n.css';
import '../../css/q/qx32gdm7x.css';
import '../../css/n/ngr3dgbao.css';
import '../../css/c/cxu04hbbv.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGkJQHgc7b" x1="256" x2="256" y1="512" gradientUnits="userSpaceOnUse"><stop offset="0" class="v9u8nhb5n"/><stop offset="1" class="qx32gdm7x"/></linearGradient><path fill="url(#SVGkJQHgc7b)" class="ngr3dgbao"/><path class="cxu04hbbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tasktrove-dark"} {...others} />);
}

export default Component;
