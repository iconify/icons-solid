import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp99hhk9k.css';
import '../../css/q/qtdh7paxk.css';
import '../../css/j/j-kqjixrh.css';
import '../../css/b/bly1iq-ut.css';
import '../../css/s/sfmle2dmy.css';
import '../../css/n/nnhrmwbhc.css';
import '../../css/e/evah0mcct.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pp99hhk9k"/><path class="qtdh7paxk"/><path class="j-kqjixrh"/><path class="bly1iq-ut"/><path class="sfmle2dmy"/><path class="nnhrmwbhc"/><path class="evah0mcct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-aperture"} {...others} />);
}

export default Component;
