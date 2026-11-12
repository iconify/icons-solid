import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt82f1bfu.css';
import '../../css/g/gpel3lais.css';
import '../../css/u/uw6o-yb3z.css';
import '../../css/u/utvvupbkr.css';

const viewBox = {"width":512,"height":512};
const content = `<radialGradient id="SVGTegr7Rru" cx="112.324" cy="536.785" r="1.331" gradientTransform="matrix(0 228.342 228.342 0 -122314.65 -25440.3)" gradientUnits="userSpaceOnUse"><stop offset="0" class="lt82f1bfu"/><stop offset=".55" class="gpel3lais"/><stop offset="1" class="uw6o-yb3z"/></radialGradient><path fill="url(#SVGTegr7Rru)" class="utvvupbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:onyka"} {...others} />);
}

export default Component;
