import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zju3j3b1q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ku0xfq--d.css';
import '../../css/u/ubfqcobgc.css';
import '../../css/v/vp3srkb8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary zju3j3b1q"/><g class="dt0cm9dhy primary"><path class="ku0xfq--d"/><path class="ubfqcobgc"/><path class="vp3srkb8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:footprints-duo"} {...others} />);
}

export default Component;
