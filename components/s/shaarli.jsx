import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km4qrvb6q.css';
import '../../css/g/glz7hvb0i.css';
import '../../css/h/h13z2jfxk.css';
import '../../css/y/ydf6iebbu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="km4qrvb6q"/><linearGradient id="SVG3kKRQbNN" x1="256.2" x2="256.2" y1="51.8" y2="464" gradientUnits="userSpaceOnUse"><stop offset="0" class="glz7hvb0i"/><stop offset="1" class="h13z2jfxk"/></linearGradient><path fill="url(#SVG3kKRQbNN)" class="ydf6iebbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:shaarli"} {...others} />);
}

export default Component;
