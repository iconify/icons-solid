import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-pfn_b1g.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qtwj46vbh.css';
import '../../css/m/mbvidv7bt.css';
import '../../css/i/ifew0xbpl.css';
import '../../css/k/kh9sagb_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary w-pfn_b1g"/><g class="dt0cm9dhy primary"><path class="qtwj46vbh"/><path class="mbvidv7bt"/><path class="ifew0xbpl"/><path class="kh9sagb_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-sun-rain-duo"} {...others} />);
}

export default Component;
