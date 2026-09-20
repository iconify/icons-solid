import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8y8zzbow.css';
import '../../css/h/hk_nrsbhh.css';
import '../../css/j/jm69sq_5e.css';
import '../../css/p/pko_q3yjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e8y8zzbow"/><path class="hk_nrsbhh"/><path class="jm69sq_5e"/><path class="pko_q3yjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:city-1"} {...others} />);
}

export default Component;
