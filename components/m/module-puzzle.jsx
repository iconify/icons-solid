import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/awect9aei.css';
import '../../css/d/d2s0r0-xz.css';
import '../../css/j/jhmlisbho.css';
import '../../css/i/irb5ott_b.css';
import '../../css/j/jsc_ytbjj.css';
import '../../css/n/naxh-2boo.css';
import '../../css/l/lr5m42g8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="awect9aei"/><path class="d2s0r0-xz"/><path class="jhmlisbho"/><path class="irb5ott_b"/><path class="jsc_ytbjj"/><path class="naxh-2boo"/><path class="lr5m42g8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:module-puzzle"} {...others} />);
}

export default Component;
