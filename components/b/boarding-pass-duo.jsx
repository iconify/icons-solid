import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zikajmxqo.css';
import '../../css/l/lpwq6acog.css';
import '../../css/d/d9pjsac5k.css';
import '../../css/n/nq_fo1m6t.css';
import '../../css/f/fvmpeubpy.css';
import '../../css/l/l26a8wbtl.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="zikajmxqo"><path class="lpwq6acog"/><path class="d9pjsac5k"/><path class="nq_fo1m6t"/><path class="fvmpeubpy"/><path class="l26a8wbtl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:boarding-pass-duo"} {...others} />);
}

export default Component;
