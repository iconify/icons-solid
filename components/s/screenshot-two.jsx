import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e-otbnbhw.css';
import '../../css/e/eerhrlbkk.css';
import '../../css/z/zhztemb6c.css';
import '../../css/c/ctq9sbb3u.css';
import '../../css/f/fg68m2erv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="e-otbnbhw"/><path clip-rule="evenodd" class="eerhrlbkk"/><path class="zhztemb6c"/><path clip-rule="evenodd" class="ctq9sbb3u"/><path class="fg68m2erv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:screenshot-two"} {...others} />);
}

export default Component;
