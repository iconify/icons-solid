import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnu6_4bpz.css';
import '../../css/y/y0in-9bzl.css';
import '../../css/p/paqpofrzu.css';
import '../../css/u/uvu_r9_fh.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGKlMkdccV" x1="201.487" x2="1225.516" y1="177.545" y2="-846.484" gradientTransform="matrix(.4 0 0 -.4 -29.4 122.2)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vnu6_4bpz"/><stop offset="1" class="y0in-9bzl"/></linearGradient><path fill="url(#SVGKlMkdccV)" class="paqpofrzu"/><path class="uvu_r9_fh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:planning-center-music-stand"} {...others} />);
}

export default Component;
