import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/skfvawb1x.css';
import '../../css/f/f-niy2zzm.css';
import '../../css/l/lqrq-fbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="skfvawb1x"/><path class="f-niy2zzm"/><path class="lqrq-fbvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:rows"} {...others} />);
}

export default Component;
