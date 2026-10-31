import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pqhzlkrmx.css';
import '../../css/a/apt2o957m.css';
import '../../css/a/a6ey7sbng.css';
import '../../css/r/rvvxdgw4h.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="pqhzlkrmx"/><path class="apt2o957m wm-shine"/><path class="a6ey7sbng wm-k"/><path class="rvvxdgw4h wm-a"/><path class="w49ngccqq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:face-mask"} {...others} />);
}

export default Component;
