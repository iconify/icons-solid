import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/p/pr0r_23gm.css';
import '../../css/e/eyod_mk5k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path clip-rule="evenodd" class="pr0r_23gm"/><path class="eyod_mk5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:water-level"} {...others} />);
}

export default Component;
