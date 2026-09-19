import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tq3a45bmh.css';
import '../../css/x/x0uamzrgs.css';
import '../../css/u/u5z8ivbnl.css';
import '../../css/m/msvogibvn.css';
import '../../css/k/kdbbi8b2b.css';
import '../../css/p/p0xm6v1jk.css';
import '../../css/e/e10jpn31y.css';
import '../../css/e/eebgf2bpx.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="tq3a45bmh"/><path class="x0uamzrgs"/><path class="u5z8ivbnl"/><path class="msvogibvn"/><path class="kdbbi8b2b"/><path class="p0xm6v1jk"/><path class="e10jpn31y"/><path class="eebgf2bpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:livewire"} {...others} />);
}

export default Component;
