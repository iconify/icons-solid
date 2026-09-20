import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/k/kckc1iwlf.css';
import '../../css/j/jyg6q1bpv.css';
import '../../css/j/jj1xiqb7u.css';
import '../../css/u/umai3-btd.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGy2fQkcWU" x1="237.111" x2="166.193" y1="288.129" y2="60.179" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="kckc1iwlf"/></linearGradient><path fill="url(#SVGy2fQkcWU)" class="jyg6q1bpv"/><path class="jj1xiqb7u"/><path class="umai3-btd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-power-automate-light"} {...others} />);
}

export default Component;
