import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qks8owbib.css';
import '../../css/j/jhl5_6blw.css';
import '../../css/g/gnk_39b2m.css';
import '../../css/y/yy00_nzeo.css';
import '../../css/j/jwz1sobma.css';
import '../../css/l/l_zuc2git.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGtqaUweEC" x1="86.364" x2="86.364" y1="337.96" y2="7.121" gradientTransform="translate(-2.427 -1.8)scale(.37233)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qks8owbib"/><stop offset="1" class="jhl5_6blw"/></linearGradient><linearGradient id="SVGGXnOQZZS" x1="216.108" x2="216.108" y1="348.988" y2="7.277" gradientTransform="translate(-2.427 -1.8)scale(.37233)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qks8owbib"/><stop offset="1" class="jhl5_6blw"/></linearGradient></defs><path clip-rule="evenodd" class="gnk_39b2m"/><path clip-rule="evenodd" class="yy00_nzeo"/><path fill="url(#SVGtqaUweEC)" clip-rule="evenodd" class="jwz1sobma"/><path fill="url(#SVGGXnOQZZS)" clip-rule="evenodd" class="l_zuc2git"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:firebird"} {...others} />);
}

export default Component;
