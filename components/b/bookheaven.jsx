import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arm78ucxu.css';
import '../../css/k/k4v1wnzve.css';
import '../../css/a/a7vpa637e.css';
import '../../css/e/e4l-s6bym.css';
import '../../css/j/jldyvdb6t.css';
import '../../css/y/ypjsi4buh.css';
import '../../css/p/p5c8d9byi.css';
import '../../css/c/cl2v93axw.css';
import '../../css/p/pi5rskbkg.css';
import '../../css/j/j-vxggbjr.css';
import '../../css/s/sm3u5w9yc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="arm78ucxu"/><path class="k4v1wnzve"/><path class="a7vpa637e"/><path class="e4l-s6bym"/><linearGradient id="SVGNGNfQeUp" x1="121.643" x2="414.217" y1="273.625" y2="-30.709" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="jldyvdb6t"/><stop offset=".012" class="ypjsi4buh"/><stop offset=".275" class="p5c8d9byi"/><stop offset=".531" class="cl2v93axw"/><stop offset=".777" class="pi5rskbkg"/><stop offset="1" class="j-vxggbjr"/></linearGradient><path fill="url(#SVGNGNfQeUp)" class="sm3u5w9yc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bookheaven"} {...others} />);
}

export default Component;
