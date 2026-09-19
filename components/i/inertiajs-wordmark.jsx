import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1y1e7-dj.css';
import '../../css/d/dz2ndeb-q.css';
import '../../css/u/uwtf4pc7b.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGKsGxpbXD" x2="128" y1="64" y2="64" gradientUnits="userSpaceOnUse"><stop offset="0" class="t1y1e7-dj"/><stop offset="1" class="dz2ndeb-q"/></linearGradient></defs><path fill="url(#SVGKsGxpbXD)" class="uwtf4pc7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:inertiajs-wordmark"} {...others} />);
}

export default Component;
