import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg2k18v-b.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/if_fr7tub.css';
import '../../css/v/vorae3l_s.css';
import '../../css/j/jbhde45qr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary zg2k18v-b"/><g class="dt0cm9dhy primary"><path class="if_fr7tub"/><path class="vorae3l_s"/><path class="jbhde45qr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chart-column-big-duo"} {...others} />);
}

export default Component;
