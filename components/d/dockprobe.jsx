import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cs9eo6b4e.css';
import '../../css/y/yzd238b6t.css';
import '../../css/n/nymd4fbcf.css';
import '../../css/o/om9mvtbvw.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGhIYX7HaZ" x1="11.497" x2="500.503" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="cs9eo6b4e"/><stop offset="1" class="cs9eo6b4e"/></linearGradient><path fill="url(#SVGhIYX7HaZ)" class="yzd238b6t"/><path class="nymd4fbcf"/><path class="om9mvtbvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dockprobe"} {...others} />);
}

export default Component;
