import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/d/dubwj3k5m.css';
import '../../css/q/qdh3wslvu.css';
import '../../css/e/ellqoeb8k.css';
import '../../css/o/o_1dvsp6s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="dubwj3k5m"/><path class="qdh3wslvu"/><path clip-rule="evenodd" class="ellqoeb8k"/><path class="o_1dvsp6s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:music-menu"} {...others} />);
}

export default Component;
