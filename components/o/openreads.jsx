import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxi2cxbcq.css';
import '../../css/o/oha4__bwk.css';
import '../../css/x/xdt0-8v0j.css';
import '../../css/h/hg97jbboc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sxi2cxbcq"/><path class="oha4__bwk"/><path class="xdt0-8v0j"/><path class="hg97jbboc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openreads"} {...others} />);
}

export default Component;
