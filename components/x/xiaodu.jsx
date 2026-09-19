import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/z/zrhez3rwb.css';
import '../../css/s/s65zp6b0h.css';
import '../../css/c/c8wpltb0s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="zrhez3rwb"/><path class="s65zp6b0h"/><path class="c8wpltb0s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:xiaodu"} {...others} />);
}

export default Component;
