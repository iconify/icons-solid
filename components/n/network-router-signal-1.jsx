import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g5wdafbtg.css';
import '../../css/i/imxfm0bju.css';
import '../../css/c/cnoj6sb3h.css';
import '../../css/r/rp2enwwxj.css';
import '../../css/q/q16o9rbmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="g5wdafbtg"/><path class="imxfm0bju"/><path class="cnoj6sb3h"/><path class="rp2enwwxj"/><path class="q16o9rbmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:network-router-signal-1"} {...others} />);
}

export default Component;
