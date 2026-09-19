import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/l/l8qk51bcc.css';
import '../../css/w/wk0ll8f3t.css';
import '../../css/w/wsqg7uboe.css';
import '../../css/l/lvfkzebln.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="l8qk51bcc"/><path class="wk0ll8f3t"/><path class="wsqg7uboe"/><path class="lvfkzebln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:coconut-tree"} {...others} />);
}

export default Component;
