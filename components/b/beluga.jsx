import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwjyhnf5e.css';
import '../../css/y/ydoy7xe2h.css';
import '../../css/y/yy-qrpbvs.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/q/q-zcx2a4r.css';
import '../../css/c/czcrn0uaa.css';
import '../../css/x/x8yrj8xir.css';
import '../../css/s/s5f54ibrk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pwjyhnf5e"/><path class="ydoy7xe2h"/><path class="yy-qrpbvs"/><g class="jn8qy4bru"><path class="q-zcx2a4r"/><path class="czcrn0uaa"/><path class="x8yrj8xir"/><path class="s5f54ibrk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:beluga"} {...others} />);
}

export default Component;
