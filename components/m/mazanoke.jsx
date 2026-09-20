import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gg671s5ev.css';
import '../../css/k/kty8ptggr.css';
import '../../css/x/xufs_xw5r.css';
import '../../css/a/ajlsb4bly.css';
import '../../css/v/v4k74_fny.css';
import '../../css/g/gv27wvboq.css';
import '../../css/d/dvh5yqbyr.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGj3FLGcWk" x1="256" x2="256" y1="512" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" class="gg671s5ev"/><stop offset=".316" class="kty8ptggr"/><stop offset="1" class="xufs_xw5r"/></linearGradient><path fill="url(#SVGj3FLGcWk)" class="ajlsb4bly"/><linearGradient id="SVGUT9FucVZ" x1="260.113" x2="260.113" y1="388.645" y2="121.29" gradientUnits="userSpaceOnUse"><stop offset="0" class="v4k74_fny"/><stop offset="1" class="gv27wvboq"/></linearGradient><path fill="url(#SVGUT9FucVZ)" class="dvh5yqbyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mazanoke"} {...others} />);
}

export default Component;
