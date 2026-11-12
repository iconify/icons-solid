import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbhh_cjyv.css';
import '../../css/v/vopj28bjv.css';
import '../../css/b/by6ghcj9t.css';
import '../../css/q/qgw5xlb2o.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGZsPISboe" x2="512" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="nbhh_cjyv"/><stop offset=".56" class="vopj28bjv"/><stop offset="1" class="by6ghcj9t"/></linearGradient><path fill="url(#SVGZsPISboe)" class="qgw5xlb2o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tmdb"} {...others} />);
}

export default Component;
