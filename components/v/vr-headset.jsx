import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/p7kgkobvq.css';
import '../../css/g/gyw8t7bmz.css';
import '../../css/d/dlvzn3b3n.css';
import '../../css/w/wsfagf5nt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="p7kgkobvq wm-shadow"/><path class="gyw8t7bmz wm-shadow"/><path class="dlvzn3b3n"/><path class="wsfagf5nt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:vr-headset"} {...others} />);
}

export default Component;
