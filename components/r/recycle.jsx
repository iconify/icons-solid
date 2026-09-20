import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/d/dvt2ovv2s.css';
import '../../css/h/hmdyybbnz.css';
import '../../css/f/f--ilabpx.css';
import '../../css/o/oboc75bbq.css';
import '../../css/i/i_nfimb7r.css';
import '../../css/z/zlq2d14bq.css';
import '../../css/n/nfrclbtoc.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="dvt2ovv2s"/><path class="hmdyybbnz"/><path class="f--ilabpx"/><path class="oboc75bbq"/><path class="i_nfimb7r"/><path class="zlq2d14bq"/><path class="nfrclbtoc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:recycle"} {...others} />);
}

export default Component;
