import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7u5wob7z.css';
import '../../css/h/h5e5is1_w.css';
import '../../css/i/ipg2vo4ij.css';
import '../../css/v/vpeuh8bzd.css';
import '../../css/k/ki2-2db_j.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGusHLBeIB" x1="256" x2="256" y1="415.265" y2="1.547" gradientTransform="matrix(1 0 0 -1 0 513.547)" gradientUnits="userSpaceOnUse"><stop offset="0" class="g7u5wob7z"/><stop offset="1" class="h5e5is1_w"/></linearGradient><path fill="url(#SVGusHLBeIB)" class="ipg2vo4ij"/><path class="vpeuh8bzd"/><path class="ki2-2db_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:minthcm"} {...others} />);
}

export default Component;
