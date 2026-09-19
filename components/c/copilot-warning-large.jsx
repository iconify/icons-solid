import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xhuizzi_l.css';
import '../../css/d/djjsp__wh.css';
import '../../css/u/uoqeok1kf.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="cuyn6tgcc"><path class="xhuizzi_l"/><path class="djjsp__wh"/><path class="uoqeok1kf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:copilot-warning-large"} {...others} />);
}

export default Component;
