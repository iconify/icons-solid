import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km4qrvb6q.css';
import '../../css/g/glz7hvb0i.css';
import '../../css/h/h13z2jfxk.css';
import '../../css/v/vr0szn57s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="km4qrvb6q"/><linearGradient id="SVGFbzjhd8e" x1="1690.263" x2="1690.263" y1="-35.761" y2="376.419" gradientTransform="translate(-1434.033 87.554)" gradientUnits="userSpaceOnUse"><stop offset="0" class="glz7hvb0i"/><stop offset="1" class="h13z2jfxk"/></linearGradient><path fill="url(#SVGFbzjhd8e)" class="vr0szn57s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:shaarli"} {...others} />);
}

export default Component;
