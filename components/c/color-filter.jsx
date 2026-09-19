import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/e/eum0i25rl.css';
import '../../css/p/p5fn7zxfk.css';
import '../../css/t/t4t7tr-mz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="eum0i25rl"/><path class="p5fn7zxfk"/><path class="t4t7tr-mz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:color-filter"} {...others} />);
}

export default Component;
