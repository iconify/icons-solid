import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lrjpf63oy.css';
import '../../css/l/l9ipdzgip.css';
import '../../css/y/yivtvjbgh.css';
import '../../css/d/d_dk79wuo.css';
import '../../css/m/m8jp65bvv.css';
import '../../css/r/r3-fii3jz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lrjpf63oy"/><linearGradient id="SVGwPXaudyU" x1="368.522" x2="368.522" y1="102.911" y2="450.228" gradientTransform="matrix(1 0 0 -1 -42.14 506.99)" gradientUnits="userSpaceOnUse"><stop offset="0" class="l9ipdzgip"/><stop offset="1" class="yivtvjbgh"/></linearGradient><path fill="url(#SVGwPXaudyU)" class="d_dk79wuo"/><path class="m8jp65bvv"/><path class="r3-fii3jz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-one"} {...others} />);
}

export default Component;
