import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qx32gdm7x.css';
import '../../css/a/algf38bxk.css';
import '../../css/g/gdiwj9opj.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGURGRZqwM" x1="18.591" x2="534.669" y1="-27.805" y2="488.273" gradientUnits="userSpaceOnUse"><stop offset="0" class="qx32gdm7x"/><stop offset="1"/></linearGradient><path fill="url(#SVGURGRZqwM)" class="algf38bxk"/><path class="gdiwj9opj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adguard-home-central-manager-dark"} {...others} />);
}

export default Component;
