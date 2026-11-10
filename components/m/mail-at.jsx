import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yk8wpcb-k.css';
import '../../css/b/bnek7ksqa.css';
import '../../css/p/p74anlbhw.css';
import '../../css/f/fzobw1bab.css';
import '../../css/r/rh_nkvbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yk8wpcb-k"/><path class="bnek7ksqa"/><path class="p74anlbhw"/><circle class="fzobw1bab"/><path class="rh_nkvbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-at"} {...others} />);
}

export default Component;
