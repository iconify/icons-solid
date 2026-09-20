import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwsqs5bzr.css';
import '../../css/b/b0ea5lb7o.css';
import '../../css/j/j48clrlca.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGDWydDWul" x1="-98.665" x2="-96.529" y1="-.51" y2="-.51" gradientTransform="rotate(90 -7577.286 7754.519)scale(154.4688)" gradientUnits="userSpaceOnUse"><stop offset="0" class="lwsqs5bzr"/><stop offset="1" class="b0ea5lb7o"/></linearGradient><path fill="url(#SVGDWydDWul)" class="j48clrlca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:seafile"} {...others} />);
}

export default Component;
