import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb9i-5hiz.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/u/u1e8aucpo.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGPA7rSc8r" x1="-25" x2="537" y1="93.7" y2="418.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="tb9i-5hiz"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGPA7rSc8r)" class="u1e8aucpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:strava-light"} {...others} />);
}

export default Component;
