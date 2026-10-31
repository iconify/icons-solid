import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kzzq1tbzo.css';
import '../../css/r/rwbpq1_1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="kzzq1tbzo wm-k"/><path class="rwbpq1_1x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circle-dot-gloss"} {...others} />);
}

export default Component;
