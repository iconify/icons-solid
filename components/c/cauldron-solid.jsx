import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v5dqb5lav.css';
import '../../css/e/e7o0z2bsq.css';
import '../../css/k/kzd_5m5vf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="v5dqb5lav"/><path class="e7o0z2bsq wm-a"/><path class="kzd_5m5vf wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cauldron-solid"} {...others} />);
}

export default Component;
