import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/c/cpcglgbgq.css';
import '../../css/u/u8tg2roig.css';
import '../../css/q/q470h-h5s.css';
import '../../css/f/fr3e1mbor.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path fill="url(#SVG8xaoz4Sr)" class="cpcglgbgq"/><path class="u8tg2roig"/><defs><radialGradient id="SVG8xaoz4Sr" cx="0" cy="0" r="1" gradientTransform="rotate(-47.38 272.923 -1.627)scale(300.774 999.837)" gradientUnits="userSpaceOnUse"><stop class="q470h-h5s"/><stop offset="1" class="fr3e1mbor"/></radialGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:octave-dark"} {...others} />);
}

export default Component;
