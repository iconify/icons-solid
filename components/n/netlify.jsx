import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntrj6wbus.css';
import '../../css/l/lc00ugj9n.css';
import '../../css/a/an_myyb-a.css';

const viewBox = {"width":512,"height":512};
const content = `<radialGradient id="SVG6w42yc2F" cx="-90.77" cy="-7.597" r="13.368" gradientTransform="matrix(0 38.301 -44.1228 0 -79.19 3476.3)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ntrj6wbus"/><stop offset="1" class="lc00ugj9n"/></radialGradient><path fill="url(#SVG6w42yc2F)" class="an_myyb-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:netlify"} {...others} />);
}

export default Component;
