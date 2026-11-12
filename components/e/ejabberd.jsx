import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x154hvr7k.css';
import '../../css/d/db39vbcar.css';
import '../../css/y/y3dpsii2d.css';
import '../../css/t/tjgbqtbac.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGOlLIIcGW" x1="256" x2="256" y1="512" gradientUnits="userSpaceOnUse"><stop offset=".006" class="x154hvr7k"/><stop offset="1" class="db39vbcar"/></linearGradient><path fill="url(#SVGOlLIIcGW)" class="y3dpsii2d"/><path class="tjgbqtbac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ejabberd"} {...others} />);
}

export default Component;
