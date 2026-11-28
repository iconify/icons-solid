import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sper1i9ar.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iq0lnbcwp.css';
import '../../css/c/cvropxbzh.css';
import '../../css/g/g7ypn4ocd.css';
import '../../css/n/nlk-ki-ax.css';
import '../../css/e/e1t-sfb1b.css';
import '../../css/n/n0p7a8b-q.css';
import '../../css/t/tricn7b4e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary sper1i9ar"/><g class="dt0cm9dhy primary"><path class="iq0lnbcwp"/><path class="cvropxbzh"/><path class="g7ypn4ocd"/><path class="nlk-ki-ax"/><path class="e1t-sfb1b"/><path class="n0p7a8b-q"/><path class="tricn7b4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:usb-duo"} {...others} />);
}

export default Component;
