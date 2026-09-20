import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/c/c98y_fk5b.css';
import '../../css/s/saub33b8b.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGLfPwmdPV" x1="483.335" x2="741.555" y1="98.231" y2="98.231" gradientTransform="matrix(.75 0 0 -.75 -178.287 329.673)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="c98y_fk5b"/></linearGradient><path fill="url(#SVGLfPwmdPV)" class="saub33b8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:skylite-ux-light"} {...others} />);
}

export default Component;
